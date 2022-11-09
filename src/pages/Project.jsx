import React from "react";
import Navbar from "../component/Navbar";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Flex,
  AccordionPanel,
  AccordionIcon,
  Img,
  Center,
  Tag,
} from "@chakra-ui/react";
import theData from "../component/projectsData";
import { RiGithubLine } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";
const Project = () => {
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
        mt={20}
      >
        {/* <Img src="https://media.giphy.com/media/DCBuTtOtzhrGK5sdNv/giphy.gif" /> */}
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
      </Flex>
    </>
  );
};

export default Project;
