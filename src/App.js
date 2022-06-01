import {useState, useEffect} from "react";
import Navbar from './components/navbar';
import ProductCard from "./components/productCard/productCard";

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
      {<Navbar scroll={scroll} />}
      <div className='sm:px-32 sm:grid sm:grid-cols-2 xl:grid-cols-4 grid justify-items-stretch py-2 lg:px-80'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
}

export default App;
