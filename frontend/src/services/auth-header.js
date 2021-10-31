
export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      
      // return { Authorization: 'Bearer ' + user.accessToken }; 
      return { 
        "Content-Type": "application/json",
        Authorization: user.accessToken };      
    } else {
      return {};
    }
  }
  