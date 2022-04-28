import { useState } from "react";
import bgImage from "./assets/bg_image.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import ContainerChildren from "./components/ContainerChildren";
import DetailsDesafio from "./components/DetailsDesafio";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {
      id: 1,
      nome: "Nicolas",
      idade: 25,
      profissao: "Controlador de Programação",
    },
    { id: 2, nome: "Jessica", idade: 23, profissao: "Auxiliar de Produção" },
    { id: 3, nome: "Nicole", idade: 15, profissao: "Estudante" },
  ];

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 3030 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 40400 },
  ];

  function showMessage() {
    console.log("Evento de componente pai");
  }
  return (
    <div>
      <h1>Iniciando</h1>
      <div>
        <img
          style={{ width: "100%", height: "50%" }}
          src="/public_image.jpg"
          alt="Pública"
        />
      </div>
      <div>
        <img
          style={{ width: "100%", height: "50%" }}
          src={bgImage}
          alt="Background"
        />
      </div>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <div>
        <ShowUserName name="Nicolas" />
      </div>
      <div>
        <CarDetails brand="Fiat" km={1000} color="Red" newCar={true} />
        <CarDetails brand="Ford" km={10000} color="Blue" newCar={true} />
        <CarDetails brand="Chevrolet" km={20000} color="Green" newCar={false} />
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
      <div>
        <Fragments />
      </div>
      <div>
        <ContainerChildren myValue={25}>
          <p>Este é o conteudo</p>
        </ContainerChildren>
        <ContainerChildren myValue={30}>
          <p>Testando Children</p>
        </ContainerChildren>
      </div>
      <div>
        <ExecuteFunction myFunction={showMessage} />
      </div>
      <div>
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>

      <div className="desafio">
        <h1>Desafio</h1>
        {pessoas.map((item) => (
          <DetailsDesafio
            key={item.id}
            nome={item.nome}
            idade={item.idade}
            profissao={item.profissao}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
