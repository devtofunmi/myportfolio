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
import {
  SiChakraui,
  SiCss3,
  SiFigma,
  SiFontawesome,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNpm,
  SiReact,
  SiSass,
  SiTwitter,
  SiVisualstudio,
  SiWhatsapp,
  SiYarn,
} from "react-icons/si";
import theData from "../component/projectsData";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <HiMoon /> : <HiLightBulb />}
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
          <Flex gap={5} mt={5} flexWrap={"wrap"}>
            <Text fontSize={"xl"}>
              <SiReact />
            </Text>
            <Text fontSize={"xl"}>
              <SiSass />
            </Text>
            <Text fontSize={"xl"}>
              <TbBrandNextjs />
            </Text>
            <Text fontSize={"xl"}>
              <SiJavascript />
            </Text>

            <Text fontSize={"xl"}>
              <SiFigma />
            </Text>
            <Text fontSize={"xl"}>
              <SiChakraui />
            </Text>
            <Text fontSize={"xl"}>
              <SiGit />
            </Text>
            <Text fontSize={"xl"}>
              <RiGithubLine />
            </Text>
            <Text fontSize={"xl"}>
              <SiNetlify />
            </Text>
            <Text fontSize={"xl"}>
              <SiVisualstudio />
            </Text>
            <Text fontSize={"xl"}>
              <SiNpm />
            </Text>
            <Text fontSize={"xl"}>
              <SiYarn />
            </Text>
            <Text fontSize={"xl"}>
              <SiFontawesome />
            </Text>
            <Text fontSize={"xl"}>
              <SiCss3 />
            </Text>
            <Text fontSize={"xl"}>
              <SiHtml5 />
            </Text>
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
              my={5}
              defaultIndex={[0]}
              allowMultiple
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {data.name}
                    </Box>
                    <AccordionIcon></AccordionIcon>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{data.description}</AccordionPanel>
                <Flex justifyContent="space-between">
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
              i tweet about tech and my tech journey
            </Text>

            <Flex mt="10px" fontSize={20} alignItems="center">
              <a href="https://wa.me/09072905477" target="blank">
                Whatsapp
              </a>
            </Flex>
            <Text textColor="#3363a5">message me let chat</Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;
