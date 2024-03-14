import { useState } from "react";
import CalculatorAndroid from "./modules/calculator_android/Calculator";
import CalculatorIOS from "./modules/calculator_iOS/CalculatorIOS";
import { ToDoList } from "./modules/toDoList/ToDoList";
import AnalogueClock from "./modules/analogueClock/analogueClock";

import "./App.css";

function App() {
  const [project, setProject] = useState(null);

  return (
    <div>
      <nav className="navbar_main">
        <div onClick={() => setProject(<p>Home Page</p>)}>Home</div>
        <div onClick={() => setProject(<ToDoList />)}>To do list</div>
        <div onClick={() => setProject(<CalculatorAndroid />)}>
          Calculator Android
        </div>
        <div onClick={() => setProject(<CalculatorIOS />)}>Calculator iOS</div>
        <div onClick={() => setProject(<AnalogueClock />)}>Analogue Clock</div>
      </nav>
      <main>{project}</main>
    </div>
  );
}

export default App;
