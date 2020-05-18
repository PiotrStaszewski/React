import React from "react";
import PropTypes from "prop-types";

export default function TableRow({
  user,
  setSelectedUser,
  getSelectedUser,
  selectedUser
}) {
  return (
    <tr
      style={{
        backgroundColor: user.idUser == selectedUser.idUser ? "yellow" : "white"
      }}
      onClick={() => {
        setSelectedUser(user);
        getSelectedUser(user);
      }}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  getSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};
