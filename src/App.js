import "./App.css";
import Row from "./Components/Row.js"
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav"

function App() {

  return (
    <div className="app">
        <Nav />
        <Banner fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Netflix orignials" fetchUrl={requests.fetchNetflixOriginals} isLarger={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarger={false}/>
    </div>
   );
 }
//6f6bf66ffcf38aa441f32321f0c81dec
export default App;
