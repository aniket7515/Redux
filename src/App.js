
import './App.css';
// import Home from './components/Home';
import HomeContainer from "./containers/HomeContainer"

function App() {
  return (
    <div className="App" >
    <HomeContainer/>
    </div>
  );
}

export default App;







// 1) if we make any component we call it from container and then app.js
// Action sends data from react to store , store stores all the data off the application
// Reducer push the data from action to store