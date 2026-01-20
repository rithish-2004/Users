import { useState } from "react";
import Users from "./Users";
import "./home.css";
function Home() {
  const data=[
    {
      name:"Alice",
      age:20,
      hobby:"Reading",
    },
    {
      name:"Alvin",
      age:22,
      hobby:"Writing",
    },
    {
      name:"Vivin",
      age:26,
      hobby:"Playing",
    },
    {
      name:"Melvin",
      age:35,
      hobby:"Dancing",
    },
    {
      name:"Rithish",
      age:21,
      hobby:"Drawing"
    },
    {
      name:"Rakesh",
      age:22,
      hobby:"Painting"
    }
  ];
  const [user,setUser]=useState(data[0]);
  const setData=(e)=>{
    const name=e.target.value;
    for(let i=0;i<data.length;i++) {
      if (data[i].name===name) {
        setUser(data[i]);
        break;
      }
    }
  };
  return (
    <div className="container">
      <h2 className="heading">View Users Details</h2>
      <label className="label">Select Customer</label>
      <select className="dropdown" value={user.name} onChange={setData}>
        {data.map((u) => (
          <option key={u.name} value={u.name}>{u.name}</option>
        ))}
      </select>

      <Users customer={user} />
    </div>
  );
}

export default Home;
