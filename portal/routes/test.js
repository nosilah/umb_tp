const fetch = require('node-fetch')


headers = {
  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NDk1Mzg3ZS05ZDEzLTQyZDctYmZjZi01ZTkwMjU3YjA3YjEiLCJqdGkiOiJkNTk5Zjg0MGJkNmM4NTVlNmVkZTQ2ZDc1OWY2MjU4NGQxZGE5MjkzYTAzOGM5NzJlMWMzZTkwYzRhOGE5YjA2YjEwNmNhNTZmY2U4MGE1ZiIsImlhdCI6MTYzNTA5NDM4OC44NTE5ODUsIm5iZiI6MTYzNTA5NDM4OC44NTE5OTYsImV4cCI6MTY2NjYzMDM4OC44Mzk3MDcsInN1YiI6IjI0Iiwic2NvcGVzIjpbXX0.HSsoF5cuO_PmMI2Q7EUjzQBNGaTbxY2dTh73FQWSEUnxEBUIaqeMRUEl3BgZ3AmehUq2A-uFANCFoChE956q6HPobUNh5vaD-7mys6fwgRULTX6EjOlXZjExbRdUrSHpNITqVteUYguFZWMEEQ4qgVyYxdwFsfhnMv-GRTu9xNhm4j3M39vHO90LE-RgqJGOQgTGcZd3XqPr1jyzzJdLhI_CrpDWCUQGLYkcoAdf1SQN0ktDWI8eRnH3LsOHg8qpGJ3awUXLNJ7xhYULd_VQswbQUUUV8jP0CMHJiqLA_nDQ1JrcjvG07xslky-qkSRuzRkLcSx34hjk8CdCXnbpze0IppL-SDrx_0xN74IRu-xAC0d1sDOfzxJgpLTqSCxr1I8SZ8aiWsHrGgxGs9SbnSn0Ee269qS7ceQkkq5oNM2TZMI7-roamqy507x8Szp5KMRXsgeY4_zFXPe3kUou0VezHQHcYyyQdTHE99UM7Jzo7_WLM9mYRzcK8F-8m-uaKese3rrKtxi1995PmRFZVblsqbMmLi98yBIYf6wisMgjQesEWmeq7eHa_FTpjRJs2RFIzdhVKqCPcYw-q9FkJsP09dlZHuBQPpyKvbTBG-AN_wfVuNU4YpvCTovc3s4MYj6k_7QXt0mpB65yvN-wEZ-K66PLVdjT6lE5YnZRY94"

}


async function check_auth() {
  let responce = await fetch('http://nginx/api/check_auth', {
    headers: headers
  }
  ).then(res => res.json()).catch(err => console.log(err));

  // console.log(responce);


  console.log(responce);
  // return responce
  
}
// console.log(check_auth());

check_auth();

// console.log(check_auth());