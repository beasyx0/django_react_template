import React, { Component } from "react";
import { Heading } from "@chakra-ui/core";
import { SimpleGrid } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";


class Home extends Component {
  render() {
    return (
      <section>
        <Heading as="h1" size="2xl" mb="10px" textAlign="center">I'm a Heading</Heading>
        <SimpleGrid minChildWidth="120px" spacing="40px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </section>
    )
  }
}
export default Home;
