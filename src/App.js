import { Interaction } from "chart.js";
import { useState, useEffect } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { UserDataLol } from "./Data";

function App() {
  const [userData, setUserData] = useState({labels: "", datasets: [],});

  useEffect(() => {
    init();
	}, []);

  async function init() {
    const data = {
      labels: UserDataLol.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserDataLol.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Users Lost",
          data: UserDataLol.map((data) => data.userLost),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "red",
          borderWidth: 2,
        },
      ],
    };
    await setUserData(data);
  }

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;