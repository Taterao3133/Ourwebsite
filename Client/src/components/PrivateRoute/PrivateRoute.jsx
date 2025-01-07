import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase'; // Ensure this is the correct path to your firebase auth setup

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth); // Check the authentication state

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading screen
  }

  if (!user) {
    return <Navigate to="admin/login" replace />; // Redirect to login if user is not authenticated
  }

  return children; // Render children if the user is authenticated
};

export default PrivateRoute;
