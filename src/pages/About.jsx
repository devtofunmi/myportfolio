import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../component/Navbar";
import StackIcons from "../component/StackIcons";

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
        <Box mt={30}>
          <Text fontSize={40} fontWeight={500}>
            About Me 👨‍💻
          </Text>
          <Text>
            I'm Olayiwola Jesutofunmi, an aspiring Web developer,I enjoy
            building projects using React and Chakra,I started learning web
            development in August 2021.
          </Text>
          {/* <Text>
            I create websites when I have free time after school. When not busy
            with doing projects and schoolworks, I try to how to play a guitar,
            and does exercise every other day at night.
          </Text> */}
        </Box>
        <Box mt={"30px"}>
          <Text fontSize={40} fontWeight={500}>
            Tech Stack ⚡
          </Text>
          <Text mt={"10px"}>
            I love exploring new libraries, programing languages and frameworks.
            Here is a list of technologies that I have worked with.
          </Text>
        </Box>
        {/* <Flex>
          <Text fontSize={25} fontWeight={500}>
            Tools I use
          </Text>
          <Img
            width={"40px"}
            src="https://media.giphy.com/media/2Y8WL0eWZDNIFRoQbO/giphy.gif"
          />
        </Flex> */}
        <Flex mt={"20px"} fontSize="20px" flexWrap={"wrap"} gap={"50px"}>
          {StackIcons.map(({ name, icon }) => (
            <Flex gap={"5px"}>
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
