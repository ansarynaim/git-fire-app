import React from "react";
import { Container } from "reactstrap";

//importing heart and react logo icons from react favicons to make our project even more attractive

import { FaHeart,FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-danger text-white text-uppercase fixed-bottom p-3 "
    >
     <FaReact /> FireGit App made with <FaHeart /> by Naim Ansary<FaReact />
    </Container>
  );
};

export default Footer;
