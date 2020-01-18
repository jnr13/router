import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();

  return <div>Hello {name}</div>;
};

export default User;
