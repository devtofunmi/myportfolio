import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../component/Navbar";
import StackIcons from "../component/StackIcons";
import jp from "../assets/ppp.png";

const About = () => {
  return (
    <>
      <Center>
        <Navbar />
      </Center>

      <Flex
        align-items="center"
        justify-content="cener"
        w={["90%", "80%", "50%"]}
        m="auto"
        flexDirection="column"
      >
        <Center w={"350px"}>
          <Img src={jp} />
        </Center>
        <Box mt={30}>
          <Text fontSize={40} fontWeight={500}>
            About Me 👨‍💻
          </Text>
          <Text>
            I'm Olayiwola Jesutofunmi, an aspiring Web developer,I enjoy
            building projects using React and Chakra,I started learning web
            development in November 2021.
          </Text>
        </Box>

        <Box mt={"30px"}>
          <Flex fontSize={40} fontWeight={500}>
            Tech Stack
            <Img
              width={"50px"}
              src="https://media.giphy.com/media/3osxY5srzVZrwq3cFq/giphy.gif"
            />
          </Flex>
          <Text mt={"10px"}>
            I love exploring new libraries, programing languages and frameworks.
            Here is a list of technologies that I have worked with.
          </Text>
        </Box>

        <Flex
          mt={"20px"}
          fontSize="20px"
          flexWrap={"wrap"}
          gap={["30px", "50px"]}
          justifyContent={"space-between"}
          mb={"10px"}
        >
          {StackIcons.map(({ name, icon }) => (
            <Flex gap={"5px"} alignItems={"center"}>
              <Text>{icon}</Text>
              <Text>{name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default About;
