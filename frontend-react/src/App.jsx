import Navbar from "./components/Navbar"
import Parent from "./components/Parent"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"
import{Routes,Route} from 'react-router-dom'
import State from "./hooks/State"
import Hooks from "./hooks/Hooks"
import Form from "./hooks/Form"
import Effect from "./hooks/Effect"
import EffectWithApi from "./hooks/EffectWithApi"
import Login from "./Auth/Login"
import Ref from "./hooks/Ref"
import Reducer from "./hooks/Reducer"
import Memo from "./hooks/Memo"
import Callback from "./hooks/Callback"
import Signup from "./Auth/Signup"
import Todo from "./components/Todo"

const App = () => {
  const element = <div>Hello, world!</div>;
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/useState" element={<State/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/signup" element={<Signup/>}/>
      {/* Nested Routes */}
      <Route path="/hooks" element={<Hooks/>}>
           <Route path="useState" element={<State/>}/>
           <Route path="form" element={<Form/>}/>
           <Route path="useEffect" element={<Effect/>}/>
           <Route path="useEffectApi" element={<EffectWithApi/>}/>
           <Route path="useRef" element={<Ref/>}/>
           <Route path="useReducer" element={<Reducer />}/>
           <Route path="useMemo" element={<Memo/>}/>
           <Route path="useCallback" element={<Callback/>}/>
           
      </Route>
    </Routes>
    
    </>
  )
}

export default App