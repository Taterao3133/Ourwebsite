import React, { useState, useEffect } from "react";
import axios from "axios";
import { db } from "../../firebase"; 
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FaGreaterThan } from "react-icons/fa";

const AdminPanel = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [contactData, setContactData] = useState({ email: "", phone: "" });
  const [socialLinks, setSocialLinks]=useState({Linkedin: "",
    instagram: "",
    twitter: "",
    whatsUpNumber:""
  })
  const [file, setFile] = useState(null);

  //  const [user, setUser] = useState(null);

  useEffect(() => {

  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (!user) {
  //   return <div>You must be logged in to access the admin panel</div>;
  // }
    
    const fetchData = async () => {
      
      try {
        const portfolioDoc = await getDoc(doc(db, "siteDetails", "portfolio"));
        const contactDoc = await getDoc(doc(db, "siteDetails", "contact"));
        const socialDoc = await getDoc(doc(db, "siteDetails", "socialLinks"));

        if (portfolioDoc.exists()) {
          setPortfolioItems(portfolioDoc.data().items || []);
         
        } else {
          console.log("Portfolio data not found");
        }

        if (contactDoc.exists()) {
          setContactData(contactDoc.data());
        } else {
          console.log("Contact data not found");
        }
        if (socialDoc.exists()) {
          setSocialLinks(socialDoc.data());
        } else {
          console.log("No social links found");
        }
      
      
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  },[]);
  
  const handleSave = async () => {
    try {
      await setDoc(doc(db, "siteDetails", "socialLinks"), socialLinks);
      alert("Social links updated successfully!");
    } catch (error) {
      console.error("Error saving social links:", error);
    }
  };
  


  const handleSavePortfolioItem = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "myPortfolioImg"); 

        const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/dhtglbqk8/image/upload', formData);
         
        const imageUrl = cloudinaryResponse.data.secure_url;

        const updatedPortfolioItems = [
          ...portfolioItems,
          { ...newPortfolioItem, imageUrl },
        ];


        await setDoc(doc(db, "siteDetails", "portfolio"), {
          items: updatedPortfolioItems,
        });

        setPortfolioItems(updatedPortfolioItems); 
        setNewPortfolioItem({ title: "", description: "", imageUrl: "" });
        setFile(null); 
        alert("Portfolio item added successfully!");
      } else {
        alert("Please upload an image first");
      }
    } catch (error) {
      console.error("Error saving portfolio item:", error);
    }
  };

  const handleImageUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const imageUrl = URL.createObjectURL(uploadedFile); 
    setNewPortfolioItem({ ...newPortfolioItem, imageUrl });
  };
  

  return (
    <div className="lg:mx-20 max-lg:mx-8 mt-5" >
      <h2 className="text-center text-4xl  ">Admin Panel</h2>
      <div className="  mt-4 ">
      <h3 className="text-center text-2xl ">Portfolio</h3>
        <div className="space-y-8 border-2 py-5 mx-auto grid justify-center items-center grid-flow-row w-[60%] text-center">
        
        <input
          type="text" className="border-2 p-3 w-full "
          placeholder="Title"
          value={newPortfolioItem.title}
          onChange={(e) =>
            setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })
          }
        />
        <textarea
          placeholder="Description" className="border-2 p-3 w-full   mt-2" 
          value={newPortfolioItem.description}
          onChange={(e) =>
            setNewPortfolioItem({
              ...newPortfolioItem,
              description: e.target.value,
            })
          }
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-5 mx-auto" />
        {newPortfolioItem.imageUrl && (
          <img
            src={newPortfolioItem.imageUrl}
            className="w-40 h-40 mx-auto mt-2"
            alt="Uploaded"
          />
        )}
        <div onClick={handleSavePortfolioItem} className="bt flex md:mx-auto  hover:bg-[#ce6ad0] hover:border-none cursor-pointer mt-7 max-sm:mx-auto w-56 max-sm:w-[50%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#000000]  rounded-[20px]">
          <button className='text-lg max-sm:text-base hover:text-[#fff]  text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex'>Save Changes <FaGreaterThan  className=" mt-[4px] ml-2  hover:text-[#fff] text-[#000000]"/>  </button>
        </div>
      
        </div>

        <h4 className="text-4xl text-center mt-8"> Current Portfolio Items</h4>
        
       
        <div className="gf grid grid-cols-3 gap-4 mt-5"> 
          {portfolioItems.map((item, index) => (
            <div key={index} className="border p-4"> 
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  className="w-20 h-20"
                  alt={`Portfolio ${index}`}
                />
              )}
            </div>
          ))}
        </div>

        
       
      </div>
 {/* contact details */}
      <div className="space-y-8 mt-5 border-2 py-5 mx-auto grid justify-center items-center grid-flow-row w-[60%] text-center">
        <h3 className="text-center text-4xl">Contact</h3>
        <input
          type="text"
          placeholder="Email"
          className="border-2 p-3 w-full"
          value={contactData.email}
          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="border-2 p-3 w-full"
          value={contactData.phone}
          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
        />
        <div className="bt flex md:mx-auto hover:bg-[#ce6ad0] hover:border-none cursor-pointer mt-7 max-sm:mx-auto w-56 max-sm:w-[50%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#000000] rounded-[20px]">
          <button
            onClick={async () => {
              try {
                if (!contactData.email || !contactData.phone) {
                  alert("Both email and phone fields are required.");
                  return;
                }
                await setDoc(doc(db, "siteDetails", "contact"), contactData);
                alert("Contact details updated successfully!");
              } catch (error) {
                console.error("Error updating contact details:", error);
                alert("Failed to update contact details. Please try again.");
              }
            }}
            className="text-lg max-sm:text-base hover:text-[#fff] text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex"
          >
            Save changes 
            <FaGreaterThan className="mt-[4px] ml-2 hover:text-[#fff] text-[#000000]" />
          </button>
        </div>
      </div>
      {/* social links */}
      <div className="lg:mx-20 max-lg:mx-8 mt-8 pb-5 mb-8">
        <h2 className="text-center text-4xl">Social Media Settings</h2>
        <div className="space-y-6 mt-6">
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={socialLinks.Linkedin}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, Linkedin: e.target.value })
            }
            className="border-2 p-3 w-full"
          />
          <input
            type="url"
            placeholder="Instagram URL"
            value={socialLinks.instagram}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, instagram: e.target.value })
            }
            className="border-2 p-3 w-full"
          />
          <input
            type="url"
            placeholder="Twitter URL"
            value={socialLinks.twitter}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, twitter: e.target.value })
            }
            className="border-2 p-3 w-full"
          />
          <input
            type="number"
            placeholder="WhatsUpNumber (it will add where contactus or getStarted buttons )"
            value={socialLinks.whatsUpNumber}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, whatsUpNumber: e.target.value })
            }
            className="border-2 p-3 w-full"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
  
    </div>
  );
};

export default AdminPanel;
