import React, {Component} from "react";
import {Switch, Route, Link} from "react-router-dom";
import axiosInstance from "../axiosApi";
import Login from "./login";
import Signup from "./signup";
import Hello from "./hello";
import Home from "./Home";

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';

import ThemeToggler from "./ThemeToggler";
import MyAccordion from "./MyAccordion";
import { Button } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import { Divider } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";


class App extends Component {

  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  };

  async handleLogout() {
    try {
      const response = await axiosInstance.post('/users/blacklist/', {
        "refresh_token": localStorage.getItem("refresh_token")
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <div className="site">
            <nav>
              <Box p="20px" textAlign="center">
                <Button variantColor="teal" variant="outline" m="5px" p="15px">
                  <Link to={"/"}>Home</Link>
                </Button>
                <Button variantColor="teal" variant="outline" m="5px" p="15px">
                  <Link className={"nav-link"} to={"/login/"}>Login</Link>
                </Button>
                <Button variantColor="teal" variant="outline" m="5px" p="15px">
                  <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                </Button>
                <Button variantColor="teal" variant="outline" m="5px" p="15px">
                  <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
                </Button>
                <Button variantColor="teal" variant="outline" m="5px" p="15px">
                  <Link className={"nav-link"} to={"/accordion/"}>Accordion</Link>
                </Button>
                <Button onClick={this.handleLogout} variantColor="teal" variant="outline" m="5px" p="15px">
                  Logout
                </Button>
                <Button leftIcon={ThemeToggler} variantColor="teal" variant="outline" m="5px" p="15px">
                </Button>
              </Box>
            </nav>
            <Divider />
            <main>
              <Box maxWidth="800px" m="auto" mt="40px" p="20px">
                <Switch>
                  <Route exact path={"/login/"} component={Login}/>
                  <Route exact path={"/signup/"} component={Signup}/>
                  <Route exact path={"/hello/"} component={Hello}/>
                  <Route exact path={"/accordion/"} component={MyAccordion}/>
                  <Route path={"/"} component={Home}/>
                </Switch>
              </Box>
            </main>
          </div>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
