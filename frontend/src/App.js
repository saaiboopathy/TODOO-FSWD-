import React, { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [enteredValue, setEValue] = useState("");
  const [activity, setActivity] = useState([]);

  useEffect(function () {
    axios.get("http://localhost:5000/activities").then(function (data) {
      setActivity(data.data)
    }
    )

  }, [])

  const handleEValue = (eve) => {
    setEValue(eve.target.value);
  };

  const handleAdd = () => {

    axios.post("http://localhost:5000/addactivities", { newActivity: enteredValue })

    setActivity([...activity, {name:enteredValue}]);
    setEValue("");
  };

  return (
    <div>
      
      <input
        value={enteredValue}
        onChange={handleEValue}
        placeholder="Enter an activity"
      />
      <button onClick={handleAdd}>Add</button>
      {activity.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
}

export default App;