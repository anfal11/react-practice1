import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";
import Book from "./Book";

function App() {
  const actors = ["SRK", "Salman", "Amir", "Ranbir", "Ranveer", "Shakib"];

  const books = [
     { name: "The Alchemist", author: "Paulo Coelho" },
    { name: "The Kite Runner", author: "Khaled Hosseini" },
    { name: "The Da Vinci Code", author: "Dan Brown" },
    { name: "The Monk Who Sold His Ferrari", author: "Robin Sharma" }   
    ]
  // bujhi nai 
  const singers = [
    {id:1, name: "Atif", age: 38 },
    {id:2, name: "Arijit", age: 34 },
    {id:3, name: "Arman", age: 26 },
    {id:4, name: "Shreya Ghosal", age: 35 }
  ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map ((singer) => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Ratul"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

{/* bujhi nai */}
      <Bookstore books={books}></Bookstore>
      {/* <Todo 
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Explore core concepts" 
        isDone={false}></Todo>
      <Todo 
        task="Try JSX" 
        isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7th" score="99"></Student>
      <Student></Student>
      <Student grade={12} score="85"></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      {" "}
      This device name: {props.name} price: {props.price} taka
    </h2>
  );
}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Anfal", age: 23 };
  return (
    <h3>
      I am a {person.name} with age: {person.age} and I have {money} taka.
    </h3>
  );
}

const { grade, score } = { grade: "7th", score: "99" };
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>I am a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const devStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={devStyle}>
      <h5> Developer </h5>
      <p> Coding:</p>
    </div>
  );
}
export default App;
