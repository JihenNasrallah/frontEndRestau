import axios from 'axios';
const API_URL = "http://localhost:3000";

  // Add new user
  const addUser = async (userData) => {
    try {
      const response = await axios.post(API_URL + "/register", userData);
      return response.data;
    } catch (err) {
      return err.message;
    }
  };
 

const userServices={
    addUser
}
  export default userServices