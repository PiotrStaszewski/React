import React from "react";
import TableHeader from "../TeableHeader";
import PropTypes from "prop-types";
import TableRow from "../TableRow";

export default function Table({
  users,
  setSelectedUser,
  getSelectedUser,
  selectedUser
}) {
  return (
    <table>
      <TableHeader columnsNames={["Id User", "First Name", "Last Name"]} />
      <tbody>
        {users.map(u => (
          <TableRow
            key={u.idUser}
            user={u}
            setSelectedUser={setSelectedUser}
            getSelectedUser={getSelectedUser}
            selectedUser={selectedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  getSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};
