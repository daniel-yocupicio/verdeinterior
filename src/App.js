import {useState, useEffect} from "react";
import Navbar from './components/navbar';

function App() {
  const [scroll,setScroll]=useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(false)
      if(window.scrollY > 0){
        console.log(window.scrollY);
        setScroll(true)
      }
    })
    return () => {
        window.removeEventListener('scroll',()=>{})
    }
  }, []);

  return (
    <div>
      <Navbar scroll={scroll} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
