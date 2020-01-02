import React from "react";
import "../../style/css/Test.css";
const axios = require("axios");
const oauth = require("axios-oauth-client");
export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  constructor() {
    super();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state.username)
    // axios
    //   .post(
    //     "https://johannsark.herokuapp.com/api/login",
    //     `grant_type=password&username=${this.state.username}&password=${this.state.password}`,
    //     {
    //       headers: {
    //         // btoa is converting our client id/client secret into base64
    //         Authorization: `Basic ${btoa("skylerWebDev:skylerWebDev")}`,
    //         "Content-Type": "application/x-www-form-urlencoded"
    //       }
    //     }
    //   )
    //   .then(res => {
    //     localStorage.setItem("token", res.data.access_token);
    //     this.props.history.push("/login/login");
    //   })
    //   .catch(err => console.dir(err));

    // e.preventDefault();
  };

  render() {
    return (
      <form className="test" onSubmit={this.handleSubmit}>
        <input
          className="test"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <input
          className="test"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}
