import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import LoadingItem from "../components/LoadigItem";
import { useEffect, useState } from "react";


function Home() {
  const period = 2000
  const [loaing, setloading] = useState(true);
  useEffect(() => {
      setloading(true)
      setTimeout(() => {
        setloading(false)
      }, period);
    }, [])
    return ( 
    <div>

{ loaing ? <LoadingItem/> :
 
    <div className=" font-bold">      
        <main className="landingpage relative" > 
        <Navbar orange={false}/>
         <div className="flex justify-end mt-28 w-full ">
         <div className=" mr-20"> 
         <h1 className="mr-10 font-bold text-gray-100  text-7xl mt-10  mb-5" > PLUS D'OPTIMISATION, </h1>
         <h1 className=" font-bold text-gray-100 text-end text-7xl"> MOINS DE CHARGES  </h1>
           </div>
         </div>
         <div className="flex absolute bottom-0 right-0 w-full justify-center p-20"> 
           <Link to={"/user"}>
           <div className="px-10 py-3 gradiantorange rounded-full flex items-center hover:scale-110"> <h1 className="text-white text-3xl font-bold text-center space-x-2 align-top inline-block" >Start</h1></div></Link>
        </div>

        </main>
        
        </div>}
        </div>  );
}

export default Home;