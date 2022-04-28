import React from "react";

const DetailsDesafio = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Informações Pessoais</h2>
      <p>Nome: {nome}</p>
      <p>Nome: {idade}</p>
      <p>Nome: {profissao}</p>
      {idade >= 18 ? (
        <h2>Você já está apto a passar pelo processo de habilitação</h2>
      ) : (
        <h2>Infelizmente sua idade ainda não é suficiente</h2>
      )}
    </div>
  );
};

export default DetailsDesafio;
