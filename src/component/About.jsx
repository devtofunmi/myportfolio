import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Flex
      align-items="center"
      justify-content="center"
      m="auto"
      flexDirection="column"
      mt={20}
      pb={"10px"}
    >
      <div data-aos="fade-up">
        <Flex fontSize={35} fontWeight={500}>
          About Me 👨‍💻
        </Flex>
      </div>
      <div data-aos="fade-left">
        <Text fontSize={"19px"} mt={"20px"}>
          Hi! I'm Olayiwola Jesutofunmi, an exceptional frontend developer with
          two years of experience. I love using technology to turn creative
          ideas into captivating digital experiences. I'm always on the lookout
          for exciting projects that challenge my skills. When I'm not coding, I
          enjoy listening to music, watching movies, spending time with loved
          ones, hanging out with friends, and exploring the internet for
          inspiration. Thanks for getting to know me, and I can't wait to
          connect with you soon!
        </Text>
      </div>
    </Flex>
  );
}

export default About
