import React from "react";
import { Link } from "react-router-dom";

const User = props => {
  const { user } = props;
  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/users/${user._id}`} className="btn btn-outline-primary">
          View Details
        </Link>
        <Link className="btn btn-outline-danger">Edit Details</Link>
      </td>
    </tr>
  );
};

export default User;
