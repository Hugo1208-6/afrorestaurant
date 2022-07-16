import React, {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header , MainContainer, CreateContainer, Aboutus,Service } from './components';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFooditems } from './Utils/firebaseFunction';
import { actionType } from './context/reducer';


const App = () => {

  const [{foodItems }, dispatch] = useStateValue();

  const fetchData = async ()=> {
    await getAllFooditems().then((data) => {
    dispatch({
      type : actionType.SET_FOOD_ITEMS, 
      foodItems : data,
    })
    }); 
  };

  useEffect(() => {
    fetchData();
   
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto  md:h-auto flex flex-col bg-primary">
     <Header/>
     <main className="mt-20 px-0 md:mt-20 px-4 md:px-16 py-4 w-full">
     <Routes>
      <Route path="/*" element={<MainContainer/>}></Route>
      <Route path="/createItem" element={<CreateContainer/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
     </Routes>
      </main>
      
    </div>
    </AnimatePresence>
  );
};

export default App;
 