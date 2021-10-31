import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:3001';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user');
  }

  // updateProfile(){ 
    
    
  // return}

}



export default new UserService();




















































