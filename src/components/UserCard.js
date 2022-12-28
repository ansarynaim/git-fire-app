import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img src={user.avatar_url} className="img-thumbnail" />
      <CardBody>
        <div className="text-danger fw-bolder fst-italic fs-4">{user.name}</div>
        <div className="text-warning fw-bold">{user.location}</div>
        <div className="text-success fw-bold">{user.bio}</div>
        <div className="text-success fw-bold">{user.company}</div>
        <div className="text-danger fw-bold">
          Available for Hire: {user.hireable ? "Yes" : "No"}
        </div>
        <div className="text-danger fw-bold">Followers: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
