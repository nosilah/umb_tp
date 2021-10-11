import axios from 'axios';

const API_URL = 'http://localhost:3000';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/login', {
        Email: user.email,
      })
      .then(response => {
        console.log(response);
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

}

export default new AuthService();
