import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useGetTrips } from "./hooks/use-get-trips";
import { Button } from "./ components/button/button";
import { Nav } from "./ components/nav/nav";
import "./App.css";

function App() {
  const { trips } = useGetTrips();
  const [count, setCount] = useState(0);

  console.log("trips", trips);

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
