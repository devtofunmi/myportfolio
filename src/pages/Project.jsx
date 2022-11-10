import React from "react";
import Navbar from "../component/Navbar";
import { Box, Flex, Img, Center, Text } from "@chakra-ui/react";
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
        mt={10}
      >
        <Flex>
          <Flex fontSize={["30px", "40px"]} fontWeight={500}>
            Projects I've built
            <Img
              width={"50px"}
              src="https://media.giphy.com/media/3o7WTQcjUp6JnP7s52/giphy.gif"
            />
          </Flex>
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
              bg={"#1c1c1c"}
              cursor="pointer"
              borderRadius={"md"}
              my={"20px"}
              p={"30px"}
              w={["350px", "500px"]}
              _hover={{
                background:
                  "linear-gradient(to left, #b90de0 0%, #3363a5 100%)",
              }}
            >
              <Box fontSize={"30px"} fontWeight={600}>
                <Flex justifyContent={"space-between"}>
                  <Flex alignItems={"center"}>
                    <Text>{name}</Text>
                    <a href={link}>
                      <BsLink45Deg />
                    </a>
                  </Flex>
                  <Box>
                    <a href={gitlink}>
                      <RiGithubLine />
                    </a>
                  </Box>
                </Flex>
              </Box>
              <Flex mt={"5px"} fontSize={"20px"} gap={"20px"} fontSize={"15px"}>
                <Text my={"10px"}>{tool}</Text>
                <Text my={"10px"}>{tools}</Text>
                <Text my={"10px"}>{toolss}</Text>
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
