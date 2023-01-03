import {useState,createContext,useContext} from 'react';
import DodajZadanie from './DodajZadanie';
const MyContext = createContext();
function ShowAllUsers({users}){
    const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide((prevHide) => !prevHide);
  };

  return (
    <MyContext.Provider value={{ hide, toggleHide }}>
      
    </MyContext.Provider>
  );
};



export default ShowAllUsers;