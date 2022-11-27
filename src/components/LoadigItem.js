import logo from "../LANDING/LOGOBLACK.png";

function LoadingItem() {
    return ( <div className="w-full h-screen flex items-center justify-center" >

       <div className=" growingup animate-bounce transition">
      <img src={logo} className="opacity-75 rounded-xl" width={300} height={300} /> </div>
    </div> );
}

export default LoadingItem;