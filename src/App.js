import './App.css';
// import Page from './pages/products/index1';
import ProductsPage from './pages/single-responsibility/index2';

function App() {
  return (
    //pagina que no respeta el principio S
    // <Page />
    //pagina que si lo respeta el principio S 
    <ProductsPage />
  );
}

export default App;
