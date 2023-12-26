import {
  Box,
  Flex,
  Text,
  useColorMode,
  Img,
  Center,
  Code,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import jay from "../assets/jay.png";
import Project from "../component/Project";
import TechStack from "../component/TechStack";
import About from "../component/About";
import Experience from "../component/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
const Homepage = () => {
     useEffect(() => {
       AOS.init({ duration: 1000 });
     }, []);
  return (
    <>
      {/* <Center>
        <Navbar />
      </Center> */}
      <Flex
        align-items="center"
        justify-content="center"
        w={["90%", "80%", "50%"]}
        m="auto"
        flexDirection="column"
      >
        <Flex
          mt={"50px"}
          gap={"40px"}
          flexDirection={["column", "row"]}
          alignItems={["left", "center"]}
        >
          <div data-aos="fade-right">
            <Box>
              <Img w={["190px", "350px"]} src={jay} />
            </Box>
          </div>

          <Box>
            <div data-aos="fade-up">
              <Flex mt={"20px"}>
                <Text fontSize={40} fontWeight={600} data-aos="fade-up">
                  Tofunmi
                </Text>
                <Img
                  width={"50px"}
                  src="https://media.giphy.com/media/LOnt6uqjD9OexmQJRB/giphy.gif"
                />
              </Flex>
            </div>
            <div data-aos="fade-left">
              <Text mt={5} textColor="#81AFDD">
                Frontend Developer 💨
              </Text>
              <Text mt={5} fontSize={"19px"}>
                {/* I'm a frontend developer,my expertise is in the area of responsive
              design,i strive to make the web a beautiful place with every line
              of code. */}
                Perpetually evolving my skills and embracing the latest
                technologies and industry standards.
              </Text>
            </div>
          </Box>
        </Flex>
        {/* <Box mt={"70px"} textAlign={"left"}>
          <Flex fontSize={"40px"} fontWeight={500}>
            Who am I?
            <Img
              width={"50px"}
              src="https://media.giphy.com/media/4p1JhLCYEOEJa/giphy.gif"
            />
          </Flex>
          <Text mt={"20px"}>
            Hi! I'm Tofunmi. I am an aspiring Web developer You probably saw me
            on Twitter tweeting about 100 Days of Code, or maybe you just saw me
            randomly on the internet.
          </Text>
        </Box> */}
        <Box>
          <About />
        </Box>
        <Box>
          <Experience />
        </Box>
        <Box>
          <TechStack />
        </Box>
        <Box>
          <Project />
        </Box>

        <Box mt={"30px"}>
          <Flex>
            <Text fontSize={25} fontWeight={500}>
              Let's Connect
            </Text>
            <Img
              width={"40px"}
              src="https://media.giphy.com/media/ukSqaH6XYVuU0XuBI6/giphy.gif"
            />
          </Flex>
          <Box mt={5} mb={10}>
            <Flex fontSize={20} alignItems="center" direction={"row"}>
              <a href="https://www.twitter.com/codebreak_er" target="_blank">
                <Code colorScheme="grey" children="<> Twitter </>" />
              </a>
            </Flex>
            <Text textColor="#81AFDD">
              I tweet about tech and my tech journey
            </Text>

            <Flex mt="10px" fontSize={20} alignItems="center">
              <a href="https://github.com/devtofunmi" target="_blank">
                <Code colorScheme="grey" children="<> Github </>" />
              </a>
            </Flex>
            <Text textColor="#81AFDD">Check out my Github profile</Text>

            <Flex mt="10px" fontSize={20} alignItems="center">
              <a href="https://wa.me/09072905477" target="_blank">
                <Code colorScheme="grey" children="<> Whatsapp </>" />
              </a>
            </Flex>
            <Text textColor="#81AFDD">Message me let's chat</Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;
