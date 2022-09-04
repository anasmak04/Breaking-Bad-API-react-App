import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  const [query, setQuery] = useState("");
  const [item, setItem] = useState([]);

  const formEvent = async (e) => {
    e.preventDefault();
    const api = `https://breakingbadapi.com/api/characters?name=${query}`;

    try {
      const response = await fetch(api);
      const data = await response.json();
      setItem(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const inputa = (e) => setQuery(e.target.value);
  return (
    <div>
      <form onSubmit={formEvent}>
        <input
          type="text"
          placeholder="enter your favourite charchter"
          onChange={inputa}
          value={query}
        />
        <button>submit</button>
      </form>
      {item.map((items) => {
        return (
          <>
            <ul key={items.char_id}>
              <li>
                <h4>name : {items.name}</h4>
              </li>
              <li>
                <h4>Birthday : {items.birthday}</h4>
              </li>
              <li>
                {" "}
                <img src={items.img} alt="image" />
              </li>
              <li>
                {" "}
                <h4>nickName : {items.nickname}</h4>
              </li>
              <li>
                {" "}
                <h4>Occupation : {items.occupation}</h4>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}
