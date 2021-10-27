import axios from 'axios';

const API_URL = 'http://127.0.0.1:3001';

class AuthService {
  login(id, authkey) {
    return axios
      .get(
        `http://127.0.0.1:3001/api/auth/${id}/${authkey}`
      )
      .then((res) => {
        console.log(res.data);
        // if (res.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(res.data));
          // return res.data
        // }
        return res.data
      });

  }

  logout() {
    axios.get(API_URL + '/logout').then(response => {
      console.log("you are logout" + response)
    })
    localStorage.removeItem('user');
  }

  register(user) {

    return axios.post(API_URL + '/register', {
        email: user.email,
      })
      .then(response => {
        console.log(response);

        return response.data;
      });
  }
  // getAuthUser() {
  //   return axios.get(API_URL + '/check_auth').then(response => {
  //     console.log({
  //       'user': response.data
  //     })
  //     if (response.data.email) {
  //       localStorage.setItem('user', JSON.stringify(response.data));
  //     }
  //     return response.data;
  //   })
  // }

}

export default new AuthService();