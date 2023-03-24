import logo from './logo.svg';
import './App.css';
import UserData from './UserData';
import Data from './components/Data';

function App() {

  return (
    <div className="App">
      <Data UserData={UserData} />
     
    </div>
  );
}

export default App;
