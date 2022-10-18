import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  AccordionPanel,
  AccordionIcon,
  Img,
  Center,
  Code,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiMoon, HiLightBulb } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

import theData from "../component/projectsData";
import StackIcons from "../component/StackIcons";
import c from "../assets/jj.jpg";
import code from "../assets/code.png";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      {/* <Box>
        <Button
          onClick={() => {
            toggleColorMode();
            setIsDark(!isDark);
          }}
        >
          {colorMode === "dark" ? <HiMoon /> : <HiLightBulb />}
        </Button>
      </Box> */}
      <Flex
        align-items="center"
        justify-content="cener"
        w={["90%", "50%"]}
        m="auto"
        flexDirection="column"
      >
        {/* <Code children="console.log(welcome)" /> */}
        <Flex mt={"50px"} flexDirection="row" alignItems="center">
          <Code colorScheme="grey" children="<h2>" />

          <Text fontSize={40} fontWeight={600}>
            Hi,I'm Tofunmi
            <Code colorScheme="grey" children="</h2>" />
          </Text>
        </Flex>
        <Text mt={5} textColor="#81AFDD">
          <Code colorScheme="grey" children="<p>" />
          I'm a Frontend Developer
          <Code colorScheme="grey" children="</p>" />
        </Text>
        <Text mt={5}>
          <Code colorScheme="grey" children="<p>" />
          I'm a frontend developer,my expertise is in the area of responsive
          design,i strive to make the web a beautiful place with every line of
          code.
          <Code colorScheme="grey" children="</p>" />
        </Text>
        <Center
          w={"300px"}
          h={"300px"}
          borderRadius={"120%"}
          bgImage={c}
          bgPosition={"top"}
          mt={"50px"}
        ></Center>
        <Box mt={20}>
          <Text fontSize={25} fontWeight={500}>
            <Code colorScheme="grey" children="<h2>" />
            Tools I use
            <Code colorScheme="grey" children="</h2>" />
          </Text>
          <Flex gap={5} mt={5} flexWrap={"wrap"} fontSize="30px">
            <StackIcons />
          </Flex>
        </Box>
        <Box mt={20}>
          <Text fontSize={25} fontWeight={500}>
            <Code colorScheme="grey" children="<h2>" />
            Projects I've built
            <Code colorScheme="grey" children="</h2>" />
          </Text>
          {theData.map((data, id) => (
            <Box
              key={id}
              bg={"transparent"}
              cursor="pointer"
              borderRadius={"md"}
              _hover={{
                background:
                  "linear-gradient(to left, #b90de0 0%, #3363a5 100%)",
              }}
            >
              <Accordion
                border="1px"
                my={10}
                defaultIndex={[0]}
                allowMultiple
                borderRadius="5px"
                data-aos="fade-up"
              >
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize={20}
                        fontWeight={600}
                      >
                        {data.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{data.description}</AccordionPanel>
                  <Flex ml="10px" mb={5} gap="5px">
                    <a href={data.link} target="blank">
                      <BsLink45Deg fontSize={30} />
                    </a>
                    <a href={data.gitlink} target="blank">
                      <RiGithubLine fontSize={30} />
                    </a>
                    <Box fontSize={30}>{data.tools}</Box>
                    <Box fontSize={30}>{data.tool}</Box>
                    <Box fontSize={30}>{data.toolss}</Box>
                  </Flex>
                </AccordionItem>
              </Accordion>
            </Box>
          ))}
        </Box>
        <Box>
          <Text fontSize={25} fontWeight={500}>
            <Code colorScheme="grey" children="<h2>" />
            Let's Connect
            <Code colorScheme="grey" children="</h2>" />
          </Text>
          <Box mt={5} mb={10}>
            <Flex fontSize={20} alignItems="center" direction={"row"}>
              <a href="https://www.twitter.com/codebreak_er" target="blank">
                <Code
                  // fontSize={20}
                  colorScheme="grey"
                  children="<> Twitter </>"
                />
              </a>
            </Flex>
            <Text textColor="#81AFDD">
              I tweet about tech and my tech journey
            </Text>

            <Flex mt="10px" fontSize={20} alignItems="center">
              <a href="https://wa.me/09072905477" target="blank">
                <Code
                  // fontSize={20}
                  colorScheme="grey"
                  children="<> Whatsapp </>"
                />
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
