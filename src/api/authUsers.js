import axios from "axios";

const authUsers = (emailValue, passwordValue, callBack) => {
  
  const string = `https://6377a4945c47776512238f30.mockapi.io/api/auth?user=${emailValue}`;
  const newArray = [];
  
  return new Promise((resolve, reject) => {
   
    if (emailValue === "" || passwordValue === "") {
      callBack("PLEASE ENTER YOUR LOGIN CREDENTIALS");
      return console.log("invalid");
    } else {

      return axios
        .get(string)
        .then((response) => {
          const data = response.data;
          data.forEach((data) => {
            if (data.user !== emailValue) {
              callBack('Invalid credentials, please contact your admin')
            } else if (data.user === emailValue) {
              localStorage.setItem("email", data.user)
              newArray.push(data.role)
              console.log("array", newArray)
              callBack("VALID")
            } else {
              callBack("INVALID");
            }
          });
          resolve(newArray)
        })
        .catch((err) => {
          console.log(err);
        });
    };
  })
}

export default authUsers;