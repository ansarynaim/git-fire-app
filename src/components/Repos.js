import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  //fetching data from github api using axios package
  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };
  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-danger fw-bolder fst-italic">{repo.name}</div>
          <div className="text-success fw-bold">{repo.language}</div>
          <div className="text-dark fw-normal fs-6">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
