"use client";

import { useEffect, useRef, useState } from "react";


interface ITodo{
  id:number,
  text:string,
  completed:boolean,
}


export default function Home() {
  const [todos,setTodos]=useState<ITodo[]>([])


  // const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault();
   
  // }
  useEffect(()=>{
    async function getTodos() {
      const res=await fetch('http://localhost:3000/api/todos')
      const data=await res.json()
      setTodos(data)
    }


    getTodos()
  },[])
  return (
    <>
      <div>
        <form>
          <input  type="text" placeholder="enter task" />
          <button>add</button>
        </form>
        <ul>
          {todos.map((name:any) => (
            <li key={name.id}>{name.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
