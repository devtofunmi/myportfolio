import { Img } from "@chakra-ui/react";
import { SiHtml5, SiReact, SiJavascript, SiCss3, SiSass } from "react-icons/si";
import jj from "../assets/gpt.png";

const theData = [
  {
    logo: "../assets/gpt.png",
    name: "Cryppto",
    image: <Img src={jj} />,
    link: "https://cryppto.netlify.app",
    gitlink: "https://github.com/devtofunmi/crypto",
    description: "A live crytocurrency website",
    tools: <SiReact />,
    // tags: [<SiReact />],
  },

  {
    logo: "",
    name: "Gppt",
    link: "https://gppt.netlify.app",
    gitlink: "https://github.com/devtofunmi/gpt",
    description: "GPT3 landing page replica",
    tools: <SiReact />,
    // tags: [<SiReact />],
  },
  {
    logo: "",
    name: "Easybank",
    link: "https://easybannk.netlify.app",
    gitlink: "https://github.com/devtofunmi",
    description: "Easy Bank Landing Page replica",
    tools: <SiReact />,
    // tags: [<SiReact />],
  },
  {
    logo: "",
    name: "Coiinsearch",
    link: "https://coiinsearch.netlify.app",
    gitlink: "https://github.com/devtofunmi",
    description: "A replica of a coiinsearch website i saw on youtube",
    tools: <SiReact />,
    // tags: [<SiReact />],
  },
  {
    logo: "",
    name: "Stay Bnb",
    link: "https://bnnnb.netlify.app",
    gitlink: "https://github.com/devtofunmi",
    description: "A replica of staybnb website",
    tool: <SiJavascript />,
    tools: <SiHtml5 />,
    toolss: <SiCss3 />,
    // tags: [<SiCss3 />, <SiJavascript />, <SiHtml5 />],
  },
  {
    logo: "",
    name: "Huddle",
    link: "https://hudd.netlify.app",
    gitlink: "https://github.com/devtofunmi",
    description: "Huddle landing page replica",
    tools: <SiHtml5 />,
    toolss: <SiCss3 />,
    // tags: [<SiCss3 />, <SiHtml5 />],
  },
  {
    logo: "",
    name: "Flytoo",
    link: "https://flytoo.netlify.app",
    gitlink: "https://github.com/devtofunmi",
    description: "A replica of staybnb homepage",
    tools: <SiHtml5 />,
    toolss: <SiCss3 />,
    tool: <SiSass />,
    // tags: [<SiCss3 />, <SiSass />, <SiHtml5 />],
  },
];

export default theData;
