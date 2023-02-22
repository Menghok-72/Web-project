import "./App.css";
import { ArticleContainer } from './Components/Article';
import NavTop from './Components/Navbar';
import { Slide } from './Components/SlideShow';
 function App() {
  return (
    <div className="App">
    <NavTop/>
    <Slide/>
    <ArticleContainer/>
    <h1>Hello11</h1>
    </div>
  );
}
export default App;