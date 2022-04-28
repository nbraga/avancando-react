import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <h1>Teste</h1>
      <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  );
};

export default ExecuteFunction;
