import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Corusel from './component/corusel/corusel';
import Hero from './component/hero/hero';
import Products from './component/products/products';
import BestProducts from './component/bestProduct/bestProducts';
import Ideas from './component/ideas/ideas';
import Search from './component/search/search';
import Footer from './component/footer/footer';


function App() {
  return (
    <div>
      <Navbar />
      <Corusel />
      <Hero/>
      <Products/>
      <BestProducts/>
      <Ideas/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
