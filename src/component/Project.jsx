import React from "react";
import Navbar from "../component/Navbar";
import { Box, Flex, Img, Center, Text, Tag } from "@chakra-ui/react";
import theData from "../component/projectsData";
import { RiGithubLine } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";
const Project = () => {
  return (
    <>
      <Flex
        align-items="center"
        justify-content="center"
        m="auto"
        flexDirection="column"
        mt={20}
        pb={"10px"}
      >
        <Flex>
          <Flex fontSize={["30px", "35px"]} fontWeight={500}>
            Projects I've built
            <Img
              width={"50px"}
              src="https://media.giphy.com/media/3o7WTQcjUp6JnP7s52/giphy.gif"
            />
          </Flex>
        </Flex>
        <Center></Center>
        {theData.map(
          ({
            logo,
            name,
            link,
            id,
            tags,
            gitlink,
            description,

            tools,
          }) => (
            <Box
              key={id}
              bg={"#1c1c1c"}
              cursor="pointer"
              borderRadius={"md"}
              my={"20px"}
              p={"30px"}
              // w={["300px","400px", "500px"]}
              _hover={{
                background:
                  "linear-gradient(to left, #b90de0 0%, #3363a5 100%)",
              }}
            >
              <Box fontSize={["22px","30px"]} fontWeight={600}>
                <Flex justifyContent={"space-between"}>
                  <Flex alignItems={"center"}>
                    <Text>{name}</Text>
                    <a target={"_blank"} href={link}>
                      <BsLink45Deg />
                    </a>
                  </Flex>
                  <Box>
                    <a target={"_blank"} href={gitlink}>
                      <RiGithubLine />
                    </a>
                  </Box>
                </Flex>
              </Box>
              <Flex mt={"5px"} fontSize={"20px"} gap={"10px"} flexWrap={"wrap"}>
                {tools.map((t) => (
                  <Tag>{t}</Tag>
                ))}
              </Flex>
              <Text mt={"5px"}>{description}</Text>
            </Box>
          )
        )}
      </Flex>
    </>
  );
};

export default Project;
