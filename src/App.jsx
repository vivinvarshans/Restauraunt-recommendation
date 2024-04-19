import MainComponent from './components/maincomponent.jsx'
import SearchComponent from './components/starting.jsx'
import Navbar from "./components/navbar"

function App() {
  return (
    <>
      <Navbar></Navbar> 
      <SearchComponent></SearchComponent>
      <MainComponent></MainComponent>
    </>
  )
}

export default App

