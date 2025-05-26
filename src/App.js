import logo from './logo.svg';
import './App.css';
// import Home from './Home.jsx'
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Intro from './Intro';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div> 
      <UserGreeting />
      {/* <ParentComp /> */}
      {/* <p> Sample text </p>
      <Home />
      <Intro />
      <Greet />
      <Welcome name="Manudheeran" />
      <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
    </div>
  );
}

export default App;
