import React from "react";
import { Box, Flex, Img, Center, Text} from "@chakra-ui/react";
const Experience = () => {

    const theData = [
      {
        id: 1,
        name: "Kaapture (Startup)",
        description:
          "Constructed the user interface for the waitlist, ensuring a seamless and visually appealing design.",
        description2:
          "Collaborated closely with the design team to integrate compelling visual elements into web applications.",
      },
      {
        id: 2,
        name: "Luta (Startup)",
        description:
          "Designed and built authentication pages and the landing page, contributing to a user-friendly and secure platform.",
      },
      {
        id: 3,
        name: "Nounite (Startup)",
        description:
          "Developed and maintained web applications using React, Cloudinary, and Tailwind CSS.",
        description2:
          "Implemented responsive design techniques to optimize the user experience across all devices.",
      },
      {
        id: 4,
        name: "UploadFly (Internship)",
        description:
          "Revamped the features section on the landing page, crafting a modern and intuitive user interface.",
      },
      {
        id: 5,
        name: "NewUsual (Company)",
        description:
          "Spearheaded the creation of a new user interface for the form page, enhancing the overall usability and aesthetics.",
      },
    ];

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
            My Experiences
            {/* <Img
              width={"50px"}
              src="https://media.giphy.com/media/3o7WTQcjUp6JnP7s52/giphy.gif"
            /> */}
          </Flex>
        </Flex>
        <Center></Center>
        {theData.map(({ id, name, description, description2 }) => (
          <Box
            key={id}
            bg={"#1c1c1c"}
            cursor="pointer"
            borderRadius={"md"}
            my={"20px"}
            p={"30px"}
            // w={["300px","400px", "500px"]}
            _hover={{
              background: "linear-gradient(to left, #b90de0 0%, #3363a5 100%)",
            }}
          >
            <Box >
              <Flex direction={"column"}>
                <Text fontSize={"30px"} fontWeight={500} >{name}</Text>
                <Text fontSize={"18px"} my={"20px"}>{description}</Text>
                <Text fontSize={"18px"}>{description2}</Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Experience;
