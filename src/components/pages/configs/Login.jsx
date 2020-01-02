import "../../style/css/Test.css";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = props => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log("props", props);

    axios
      .post(
        "https://johannsark.herokuapp.com/api/login",
        `grant_type=password&username=${values.username}&password=${values.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic c2t5bGVyV2ViRGV2OnNreWxlcldlYkRldg==`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        props.history.push("/login/login");
        console.log("token", res.data.access_token);
      })
      .catch(err => console.dir(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
        ref={register({
          required: "Required"
        })}
      />
      {errors.username && errors.username.message}

      <input
        name="password"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;

// import React, { useState } from "react";
// import "../../style/css/Test.css";
// const axios = require("axios");
// const oauth = require("axios-oauth-client");
// const Login = () => {
//   const [info, setInfo] = useState([
// { username: '', password: '' },
//   ]);

//  const handleChange = e => {
//    setInfo({
//       [e.target.name]: e.target.value
//     });
//   };

//  const handleSubmit = e => {
//     console.log(info.username)
//     // axios
//     //   .post(
//     //     "https://johannsark.herokuapp.com/api/login",
//     //     `grant_type=password&username=${this.state.username}&password=${this.state.password}`,
//     //     {
//     //       headers: {
//     //         // btoa is converting our client id/client secret into base64
//     //         Authorization: `Basic ${btoa("skylerWebDev:skylerWebDe~v")}`,
//     //         "Content-Type": "application/x-www-form-urlencoded"
//     //       }
//     //     }
//     //   )
//     //   .then(res => {
//     //     localStorage.setItem("token", res.data.access_token);
//     //     this.props.history.push("/login/login");
//     //   })
//     //   .catch(err => console.dir(err));

//     // e.preventDefault();
//   };

//     return (
//       <form className="test" onSubmit={handleSubmit}>
//         <input
//           className="test"
//           type="text"
//           name="username"
//           value={info.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="test"
//           type="password"
//           name="password"
//           value={info.password}
//           onChange={handleChange}
//           required
//         />
//         <button>Submit</button>
//       </form>
//     );
//   }

// export default Login
