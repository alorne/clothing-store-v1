import { Route, Routes } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Home from './components/routes/home/home.component';


const Shop = () => {
  return(
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}
const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>    
      <Route path="shop" element={<Shop />}/>
    </Route>
  </Routes>
  );
}
export default App;