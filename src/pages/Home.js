import React, { useState, useContext } from "react";
import Axios from "axios";
import { FaReact } from "react-icons/fa";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,

} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Oops! Not Able to locate the user ,Sorry!", { type: error });
    }
  };

  //content of the homepage when user is not present 

  if (!context.user?.uid) {
    return (
      <div >
      <Card 
      className="bg-dark"
      >
        <CardBody>
          <CardTitle className="text-center text-danger"  tag="h2">
            FireGit APP
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-white text-center p-3"
            tag="h6"
          >
            This is a React <FaReact /> based simple Web Application.
          </CardSubtitle>
          <CardText className="text-center text-info " tag="h5">
           <p>This is a React based web Application with all the functionality of authentication thas is done using firebase .Here user can make a new account on clicking on the signup option and if he/she already have an account then he/she can signin clicking on the signin option mentioned in the navbar.</p>
  
           <p>
             After signing in  user can see a search bar where he/she can search the user on github with there respective github name and they can find out the various information like name ,profile picture,repositories etc. regarding the github account of the user .
           </p>
          </CardText>
          
        </CardBody>
      </Card>
    </div>
    );
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />

            <Button onClick={fetchDetails} color="danger">
              Search User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
