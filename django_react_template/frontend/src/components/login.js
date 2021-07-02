import React, { Component } from "react";
import axiosInstance from "../axiosApi";

import { Button, Box, Flex, Heading, FormControl, FormLabel, Input } from "@chakra-ui/core";


class Login extends Component{
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/users/token/obtain/', {
        username: this.state.username,
        password: this.state.password
      });
      axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      return data;
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  render() {
    return (
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={this.handleSubmit}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input name="username" type="text" value={this.state.username} onChange={this.handleChange} p="20px" color="black"/>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" value={this.state.password} onChange={this.handleChange} p="20px" color="black" placeholder="*******" />
              </FormControl>
              <Button width="full" mt={2} type="submit" p="15px">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      // <div>
      //   Login
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Username:
      //       <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
      //     </label>
      //     <br/>
      //     <br/>
      //     <label>
      //       Password:
      //       <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
      //     </label>
      //     <br/>
      //     <br/>
      //     <input type="submit" value="Submit"/>
      //   </form>
      // </div>
    )
  }
}
export default Login;
