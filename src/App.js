import s from './App.module.css';
import Navbar from './Navbar/Navbar';
import Home from "./Home/Home";
import Header from './Header/Header';
import Applications from "./Applications/Applications";

const App = () =>{
 return (
   <div className={s.wrapper}>
    <Header />
    <Navbar />
    <div className={s.content}>
    <Home />
    {/*<Applications />*/}
    </div>
   </div>
 );
}

export default App;