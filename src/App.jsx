import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box w={"100%"} minH={"100vh"} bg={"black"} color={"white"}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/devtofunmi/project" element={<Project />} />
            <Route path="/devtofunmi/about" element={<About />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
