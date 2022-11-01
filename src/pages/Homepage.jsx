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
  Tag,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { BsLink45Deg } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

import theData from "../component/projectsData";
import StackIcons from "../component/StackIcons";
import jj from "../assets/gpt.png";
const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <Flex
        align-items="center"
        justify-content="cener"
        w={["90%", "80%", "50%"]}
        m="auto"
        flexDirection="column"
      >
        <Flex mt={"50px"} flexDirection="row" alignItems="center">
          <Flex direction={"row"}>
            <Text fontSize={40} fontWeight={600}>
              Hi,I'm Tofunmi
            </Text>
            <Img
              width={"50px"}
              src="https://media.giphy.com/media/LOnt6uqjD9OexmQJRB/giphy.gif"
            />
          </Flex>
        </Flex>
        <Text mt={5} textColor="#81AFDD">
          I'm a Frontend Developer
        </Text>
        <Text mt={5}>
          I'm a frontend developer,my expertise is in the area of responsive
          design,i strive to make the web a beautiful place with every line of
          code.
        </Text>

        <Box mt={20}>
          <Flex>
            <Text fontSize={25} fontWeight={500}>
              Tools I use
            </Text>
            <Img
              width={"40px"}
              src="https://media.giphy.com/media/2Y8WL0eWZDNIFRoQbO/giphy.gif"
            />
          </Flex>
          <Flex gap={5} mt={5} flexWrap={"wrap"} fontSize="30px">
            <StackIcons />
          </Flex>
        </Box>
        <Box mt={20}>
          <Img src="https://media.giphy.com/media/DCBuTtOtzhrGK5sdNv/giphy.gif" />
          <Flex>
            <Flex fontSize={25} fontWeight={500}>
              Projects I've built
            </Flex>

            <Img
              width={"40px"}
              src="https://media.giphy.com/media/ehC4SqtNcEeLAiu66w/giphy.gif"
            />
          </Flex>
          {theData.map(
            ({
              logo,
              name,
              link,
              id,
              tags,
              gitlink,
              description,
              tool,
              tools,
              toolss,
              image,
            }) => (
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
                          {name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{description}</AccordionPanel>
                    <Flex gap={"7px"} ml={"10px"} mb={"10px"}>
                      <Tag bg={"blue"}>{tools} </Tag>
                      <Tag bg={"red"}>{tool} </Tag>
                      <Tag bg={"green"}>{toolss} </Tag>

                      {/* {tags.map((tag, i) => { */}
                      {/* <Tag key={i}>{tag}</Tag>; */}
                      {/* })} */}
                    </Flex>
                    <Flex ml="10px" mb={5} gap="5px">
                      <a href={link} target="blank">
                        <BsLink45Deg fontSize={25} />
                      </a>
                      <a href={gitlink} target="blank">
                        <RiGithubLine fontSize={25} />
                      </a>
                    </Flex>
                  </AccordionItem>
                </Accordion>
              </Box>
            )
          )}
        </Box>
        <Box>
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
