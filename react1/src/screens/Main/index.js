import React, { useState } from "react";
import Header from "../sheared/Header";
import Table from "../sheared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" }
  ];

  const [users, setUsers] = useState(usersInitial);
  const [usersList, deleteSelectedUser] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = e => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB"
      }
    ]);
  };

  const getCurrentlySelectedUser = user => {
    //console.log(user);
    return user;
  };

  const deleteUser = e => {
    //var us = getCurrentlySelectedUser();
    //console.log(selectedUser.idUser);

    for (var x = 0; x < usersList.length; x++) {
      if (usersList[x].idUser == selectedUser.idUser) {
        usersList.splice(usersList[x].idUser - 1, 1);
      }
    }
  };

  const setCurrentlySelectedUser = user => {
    setSelectedUser(user);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          getSelectedUser={getCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
        <br />
        <button type="button" onClick={deleteUser} className="btn">
          Usuń użytkownika
        </button>
      </div>
    </>
  );
}
