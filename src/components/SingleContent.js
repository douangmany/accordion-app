import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function SingleContent({ name, about }) {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className="content">
      <header>
        <h4>{name}</h4>
        <button className="btn" onClick={() => setShowContent(!showContent)}>
          {showContent ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {showContent && <p>{about}</p>}
      </header>
    </div>
  );
}
