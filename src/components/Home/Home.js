import React from "react";
import img from "../../assets/logoNat30.png";
import "./Home.scss";
let about = [
  "медик (базовое медицинское образование государственного образца)",
  "инструктор лечебной физкультуры ( государственного образца)",
  "преподаватель массажа",
  "косметолог ( государственного образца и др. Школ)",
  "Грандмастер Рэйки с правом преподавания",
  "остеопат (обучение в нескольких школах)",
  "краниосакральный терапевт (обучение в нескольких школах)",
  "висцеральный остеопат ( обучение в нескольких школах по разным методикам)",
  "преподаватель остеопатии",
  "энерготерапевт",
  "целитель",
  "трансформолог",
  "произвожу коррекции и настраивание любых способностей под безвредные для себя и окружающих",
  "дефектолог",
  "регрессолог",
  "произвожу коррекции личности",
  "произвожу коррекции судьбы",
  "таролог",
  "рунолог",
  "простраиваю ситуации",
  "эзотерик",
];
const Home = () => {
  return (
    <div className="home">
      <h2>О себе:</h2>
      {about.map((item, index) => (
        <p key={index}>
          <img src={img} alt="point logo" />
          {item}
        </p>
      ))}
      <h3>Принцип работы: " Не навреди".</h3>
      <h3> Путь ученика и наставника.</h3>
    </div>
  );
};

export default Home;
