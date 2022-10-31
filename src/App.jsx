import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import { Box } from "@chakra-ui/react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box w={"100%"} minH={"100vh"} bg={"#0c1c24"} color={"white"}>
        <Homepage />
      </Box>
    </>
  );
}

export default App;
