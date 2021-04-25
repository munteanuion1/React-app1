import './App.css';
import Navbar from './Navbar/Navbar';
import Content from "./Content/Content";
import Header from './Header/Header';

const App = () =>{
 return (
   <div className="wrapper-app">
    <Header />
    <Navbar />
    <Content />
    
   </div>
 );
}







export default App;