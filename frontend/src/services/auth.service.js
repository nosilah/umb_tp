import axios from 'axios';
// import Header from './auth-header';


const API_URL = 'http://127.0.0.1:3001';

class AuthService {
  login(id, authkey) {
    return axios
      .get(
        API_URL + `/api/auth/${id}/${authkey}`
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

  async logout() {
    let user = JSON.parse(localStorage.getItem('user'));

    await axios.get(API_URL + '/logout', {
      headers: {
        "Content-Type": "application/json",
        Authorization: user.accessToken
      }
    }).then(res => {
      JSON.stringify(res)
      console.log(res);
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