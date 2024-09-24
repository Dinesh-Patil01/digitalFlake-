
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import bgImage from "../assets/landingPic.png"; 


const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="bg-purple-50 h-screen w-screen flex items-center justify-center relative"
		style={{
			backgroundImage: `url(${bgImage})`, 
			backgroundSize: "cover", 
			backgroundPosition: "center",
		}}>
		<div className="w-full max-w-xl bg-white rounded-2xl shadow-xl relative z-10 mr-96 mt-14 p-14">

			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-10 text-center text-purple-600-p bg-clip-text'>
					Create Account
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<PasswordStrengthMeter password={password} />

					<button
						className='mt-5 w-full py-3 px-4 bg-purple-800 text-white 
						font-bold rounded-lg shadow-lg'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
					</button>
				</form>
			</div>
			<div className='px-8 py-4 bg-gray-200 bg-opacity-50 flex justify-center'>
				<p className='text-xl text-gray-800'>
					Already have an account?{" "}
					<Link to={"/login"} className='text-purple-700 hover:underline'>
						Login
					</Link>
				</p>
			</div>
		</div>
		<div className="absolute inset-0 bg-purple-900 opacity-30 z-0"></div>
		</div>
	);
};
export default SignUpPage;

