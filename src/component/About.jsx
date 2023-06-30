import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Flex
      align-items="center"
      justify-content="center"
      m="auto"
      flexDirection="column"
      mt={20}
      pb={"10px"}
    >
      <Flex fontSize={40} fontWeight={500}>
        About Me 👨‍💻
      </Flex>
      <Text fontSize={"20px"} mt={"20px"}>
        Experienced frontend developer skilled in building responsive and
        user-friendly websites. Proficient in HTML, CSS, JavaScript, React,
        Chakra UI, Tailwind CSS and Next js. Constantly updating skills with the
        latest technologies and best practices. Utilizes Supabase, Git, and
        GitHub for efficient development. Committed to delivering exceptional
        results.
      </Text>
    </Flex>
  );
}

export default About
