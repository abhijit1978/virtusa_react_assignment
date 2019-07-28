import React, { Component } from "react";
import User from "./user";

const UserList = props => {
  const { users } = props;
  return (
    <div className="row">
      <h3>All Users</h3>
      <table>
        {users.map(user => (
          <User user={user} />
        ))}
      </table>
    </div>
  );
};

export default UserList;
