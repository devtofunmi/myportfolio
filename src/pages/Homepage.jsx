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
} from "@chakra-ui/react";
import React from "react";
import { HiMoon, HiLightBulb } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import theData from "../component/projectsData";
import StackIcons from "../component/StackIcons";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <HiMoon /> : <HiLightBulb />}
        </Button>
      </Box>
      <Flex
        align-items="center"
        justify-content="cener"
        w={["90%", "50%"]}
        m="auto"
        flexDirection="column"
      >
        <Flex flexDirection="row" alignItems="center">
          <Text fontSize={40} fontWeight={600}>
            Hi,I'm Tofunmi
          </Text>
        </Flex>
        <Text mt={5} textColor="#3363a5">
          I'm a Frontend Developer
        </Text>
        <Text mt={5}>
          I'm a frontend developer,my expertise is in the area of responsive
          design,i strive to make the web a beautiful place with every line of
          code.
        </Text>
        <Box mt={20}>
          <Text fontSize={20} fontWeight={500}>
            Tools I use
          </Text>
          <Flex gap={5} mt={5} flexWrap={"wrap"} fontSize="30px">
            <StackIcons />
          </Flex>
        </Box>
        <Box mt={20}>
          <Text fontSize={20} fontWeight={500}>
            Projects I've built
          </Text>
          {theData.map((data) => (
            <Accordion
              border="1px"
              bgGradient="linear(to-l, #b90de0, #3363a5)"
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
                    <BsLink45Deg fontSize={20} />
                  </a>
                  <a href={data.gitlink} target="blank">
                    <RiGithubLine fontSize={20} />
                  </a>
                </Flex>
              </AccordionItem>
            </Accordion>
          ))}
        </Box>
        <Box>
          <Text fontSize={20} fontWeight={500}>
            Let's Connect
          </Text>
          <Box mt={5} mb={10}>
            <Flex fontSize={20} alignItems="center">
              <a href="https://www.twitter.com/codebreak_er" target="blank">
                <Text> Twitter</Text>
              </a>
            </Flex>
            <Text textColor="#3363a5">
              I tweet about tech and my tech journey
            </Text>

            <Flex mt="10px" fontSize={20} alignItems="center">
              <a href="https://wa.me/09072905477" target="blank">
                Whatsapp
              </a>
            </Flex>
            <Text textColor="#3363a5">Message me let's chat</Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;
