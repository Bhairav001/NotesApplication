import Problem from "./Example/Problem";
import "./App.css"
import UseCallBackHook from "./components/UseCallBackHook";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import Counter from "./components/Counter";
import UseReducer from "./components/UseReducer";
function App() {
  return (
    <div className="App">
         {/* <UseCallBackHook/> */}
         {/* <UseMemo/> */}
         {/* <UseRef/> */}
         {/* <Counter/> */}
         <UseReducer/>
    </div>
  );
}

export default App;
