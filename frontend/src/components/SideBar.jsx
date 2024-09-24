
import { Link } from "react-router-dom";
import home from "../assets/home.png"  
import tog from "../assets/tog.png"
import job from "../assets/job-offer.png"
import users from "../assets/user.png"
import { Outlet } from 'react-router-dom';

const SideBar = () => {
	return (
			<div>
				<div className="flex h-screen">
						<div className="w-80 bg-gray-100 border-r-2 text-2xl">
							<ul className="mt-4">
							<li className="py-3 px-4 hover:bg-yellow-200 cursor-pointer">
								<Link to="/" className="flex items-center justify-around">
									<img src={home} alt="" />
									Home
									<img src={tog} alt="" />
								</Link>
							</li>

							<li className="py-3 px-4 hover:bg-yellow-200 cursor-pointer ">
								<Link to="/roles" className="flex items-center justify-around">
									<img src={job} alt="" />
									Roles
									<img src={tog} alt="" />
								</Link>
							</li>
							<li className="py-3 px-4 hover:bg-yellow-200 cursor-pointer ">
								<Link to="/users" className="flex items-center justify-around">
									<img src={users} alt="" />
									Users
									<img src={tog} alt="" />
								</Link>
							</li>
			
							</ul>
							
						</div>
						<Outlet />
				</div>

			</div>
	);
};
export default SideBar;




