import React, { useState, useEffect } from "react";
import axios from "axios";
import { db } from "../../firebase"; 
import { doc, getDoc, setDoc } from "firebase/firestore";

const AdminPanel = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [contactData, setContactData] = useState({ email: "", phone: "" });
  const [file, setFile] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioDoc = await getDoc(doc(db, "siteDetails", "portfolio"));
        const contactDoc = await getDoc(doc(db, "siteDetails", "contact"));

        if (portfolioDoc.exists()) {
          setPortfolioItems(portfolioDoc.data().items || []);
          console.log(portfolioItems,'has found') 
        } else {
          console.log("Portfolio data not found");
        }

        if (contactDoc.exists()) {
          setContactData(contactDoc.data());
        } else {
          console.log("Contact data not found");
        }
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  });


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
        setFile(null); // 
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
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Portfolio</h3>
        <input
          type="text"
          placeholder="Title"
          value={newPortfolioItem.title}
          onChange={(e) =>
            setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })
          }
        />
        <textarea
          placeholder="Description"
          value={newPortfolioItem.description}
          onChange={(e) =>
            setNewPortfolioItem({
              ...newPortfolioItem,
              description: e.target.value,
            })
          }
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {newPortfolioItem.imageUrl && (
          <img
            src={newPortfolioItem.imageUrl}
            className="w-40 h-40"
            alt="Uploaded"
          />
        )}
        <button onClick={handleSavePortfolioItem}>Save changes //</button>

        <h4>Current Portfolio Items</h4>
        <ul>
          {portfolioItems.map((item, index) => (
            <li key={index}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  className="w-20 h-20"
                  alt={`Portfolio ${index}`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <input
          type="text"
          value={contactData.email}
          onChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        />
        <input
          type="text"
          value={contactData.phone}
          onChange={(e) =>
            setContactData({ ...contactData, phone: e.target.value })
          }
        />
        <button
          onClick={async () =>
            await setDoc(doc(db, "siteDetails", "contact"), contactData)
          }
        >
          Save Contact Changes
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
