import Problem from "./Example/Problem";
import "./App.css"
import UseCallBackHook from "./components/UseCallBackHook";
import UseRef from "./components/UseRef";
import Counter from "./components/Counter";
import UseReducer from "./components/UseReducer";
import UseReducerHook from "./components/UseReducerHook";
import UseMemoHook from "./components/UseMemoHook";
import CustomHookCounter from "./components/CustomHookCounter";
import CustomHookData from "./ReactInterview/CustomHookData";
import UseEffect from "./components/UseEffect";
import StopWatch from "./components/StopWatch";
import UseState from "./recap/UseState";
import CustomHook from "./recap/CustomHook";
import UseContextReacp from "./recap/UseContextReacp";
import ContextApiRecap from "./recap/ContextApiRecap";
import UseMemo from "./recap/UseMemo";
import UseSelectorRecap from "./recap/UseSelectorRecap";
import UseCallBack from "./recap/UseCallBack";
import ReduxCounter from "./reduxCounter/ReduxCounter";
import UseRefRecap from "./components/UseRefRecap";
import Todo from "./components/Todo";
import UseReducerGotam from "./gotam/UseReducerGotam";
import UseMemoGotam from "./gotam/UseMemoGotam";
import CounterGotam from "./gotam/CounterGotam";
import CustomHookGotam from "./gotam/CustomHookGotam";
import Home from "./MiniProject/crunApp/pages/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./MiniProject/crunApp/pages/Movies";
import AdminDashboard from "./MiniProject/crunApp/admin/AdminDashboard";
import Form from "./gotam/Form";
import Button from "./gotam/Button";
function App() {
  return (
     <Routes>
        <Route path="/" element={<Button/>}/>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/movies" element={<Movies/>}/>
     </Routes>
  );
}

export default App;
