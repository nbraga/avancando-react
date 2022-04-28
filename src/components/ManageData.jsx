import React, { useState } from "react";

const ManageData = () => {
  const someData = 10;
  const [number, setNumber] = useState(15);
  return (
    <div>
      <div>
        Valor: {someData}
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        Valor: {number}
        <button onClick={() => setNumber(30)}>Mudar State</button>
      </div>
    </div>
  );
};

export default ManageData;
