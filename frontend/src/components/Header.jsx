import { useAuthStore } from "../store/authStore";
import df from "../assets/df_.png"
import logOut from "../assets/logOut.png"

const Header = () => {
    const { user, logout } = useAuthStore();
console.log("user", user)
	const handleLogout = () => {
		logout();
	};
    return (
      <header className="w-screen mx-auto ">
        <div className='p-1 bg-purple-900 flex justify-between items-center '>
				<div>
					<img className="w-45 h-10 ml-6" src={df} alt="" />
				</div>
				<div className='mt-2'>
					<button onClick={handleLogout} className='w-full py-3 px-4'>
						<img className="w-45 h-10 mr-4" src={logOut} alt="" />
					</button>
				</div>
			</div>
      </header>
    );
  };
  
  export default Header;
  