import { Box, Center, color, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      pos={"fixed"}
      zIndex={"3"}
      bottom={2}
      borderRadius={"15px"} 
      w={["90%", "70%", "50%"]}
      bg={"#E94560"}
      my={"20px"}
      p={"10px"}
      mt={20}
      pb={"10px"}
    >
      <Center>
        <Flex justifyContent={"center"} gap={"20px"}>
          <Box>
            <Text
              _hover={{
                color: "#81AFDD",
              }}
            >
              Homepage
            </Text>
          </Box>
          <Box>
            <Text
              _hover={{
                color: "#81AFDD",
              }}
            >
              Project
            </Text>
          </Box>
          <Box>
            <Text
              _hover={{
                color: "#81AFDD",
              }}
            >
              About
            </Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Navbar;
