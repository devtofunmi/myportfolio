import { Box, color, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      w={"300px"}
      bg={"#2c2b2c"}
      my={"20px"}
      p={"10px"}
      borderRadius={"30px"}
    >
      <Flex justifyContent={"center"} gap={"20px"}>
        <Link to={"/"} mt={"20px"}>
          <Text
            _hover={{
              color: "#81AFDD",
            }}
          >
            Homepage
          </Text>
        </Link>
        <Link to={"/devtofunmi/project"} mt={"20px"}>
          <Text
            _hover={{
              color: "#81AFDD",
            }}
          >
            Project
          </Text>
        </Link>
        <Link to={"/devtofunmi/about"} mt={"20px"}>
          <Text
            _hover={{
              color: "#81AFDD",
            }}
          >
            About
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
