import './App.css';
import Main from './main/main.js';
import ArrayNotes from "../data.js"


function App(props) {
  return (
    <div className="App">
<Main data={ArrayNotes}/>
    </div>
  );
}

export default App;
