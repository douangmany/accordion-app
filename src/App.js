import React, { useState } from "react";
import data from "./components/data";
import SingleContent from "./components/SingleContent";
import './App.css'

export default function App() {
  const [content, setContent] = useState(data);
  return (
    <main>
      <div className="container">
        <section>{content.map((data)=>{return <SingleContent key={data.id} {...data} />;})}</section>
      </div>
    </main>
  );
}
