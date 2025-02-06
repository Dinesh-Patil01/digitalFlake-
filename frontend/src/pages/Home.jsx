import logo from "../assets/DF_logo.png"

const Home = () => {
    return (
        <div className="flex-grow p-8 bg-white">
          <div className="bg-gray-100 text-white p-6 rounded-md w-1/1 h-screen mx-auto flex flex-col justify-center items-center">
            <img className="w-1/4 h-80" src={logo} alt="" />
            <h2 className="text-2xl text-black font-semibold">Welcome to Digitalflake Admin</h2>
          </div>
       </div>
    );
  };
  
  export default Home;
