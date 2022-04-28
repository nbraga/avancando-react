import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Nicolas");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      <h1>If ternário</h1>
      {!x && <p>Agora x é falso</p>}
      {name === "João" ? (
        <div>
          <h1>O nome é {name}</h1>
        </div>
      ) : (
        <div>
          <h1>Nome não encontrado!</h1>
        </div>
      )}
      <button onClick={() => setName("João")}>Trocar Nome</button>
    </div>
  );
};

export default ConditionalRender;
