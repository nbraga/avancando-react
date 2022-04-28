import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Nicolas", "Nicole", "Jessica"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Elda", age: 50 },
    { id: 2, name: "Deuza", age: 51 },
    { id: 3, name: "João", age: 52 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {index} - {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              {item.name} - {item.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  );
};

export default ListRender;
