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
        mt={20}
        align-items="center"
        justify-content="cener"
        w={["90%", "80%", "50%"]}
        m="auto"
        flexDirection="column"
      >
        <Box>
          <Text>About Me 👨‍💻</Text>
          <Text>
            I'm Lance Ross, an aspiring Web developer from the Philippines. I
            enjoy building projects using Astro and Tailwind CSS. I started
            learning web development last August 2022.
          </Text>
          <Text>
            I create websites when I have free time after school. When not busy
            with doing projects and schoolworks, I try to how to play a guitar,
            and does exercise every other day at night.
          </Text>
        </Box>
        <Box>
          <Text>Tech Stack ⚡</Text>
          <Text>
            I love exploring new libraries and frameworks. Here is a short list
            of technologies that I use with my side projects. Astro Jav
          </Text>
        </Box>
        <Flex>
          <Text fontSize={25} fontWeight={500}>
            Tools I use
          </Text>
          <Img
            width={"40px"}
            src="https://media.giphy.com/media/2Y8WL0eWZDNIFRoQbO/giphy.gif"
          />
        </Flex>
        <Box fontSize="30px">
          {StackIcons.map(({ name, icon }) => (
            <Flex
              textAlign={"center"}
              gap={"10px"}
              justifyContent={"center"}
              direction={"row"}
            >
              <Box>
                <Text>{icon}</Text>

                <Text>{name}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default About;
