
import Home from './components/home/Home';
import './App.css';
const dbData=require("./data/db.json")


export default function App() {
  return (
    <div className="App">
    < Home  arrayData={dbData} />
    </div>
  );
}


