import "./App.css";
import Row from "./Components/Row.js"
import requests from "./requests";


function App() {

  return (
    <div className="app">
        <Row title="Netflix orignials" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
   );
 }
//6f6bf66ffcf38aa441f32321f0c81dec
export default App;
