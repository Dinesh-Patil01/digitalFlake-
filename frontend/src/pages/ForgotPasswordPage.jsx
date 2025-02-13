import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<div className="bg-purple-50 h-screen w-screen flex items-center justify-center relative">
		<div
			className='max-w-md w-full bg-white rounded-2xl shadow-xl relative z-10 '
		>
			<div className='p-8'>
				<h2 className='text-3xl mb-6 text-center bg-purple-500 bg-clip-text'>
					Forgot Password
				</h2>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit}>
						<p className='text-gray-900 mb-6 text-center'>
							Enter your email address and we'll send you a link to reset your password.
						</p>
						<Input
							icon={Mail}
							type='email'
							placeholder='Email Address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<button
							className='w-full py-3 px-4 bg-purple-800 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
							type='submit'
						>
							{isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : "Send Reset Link"}
						</button>
					</form>
				) : (
					<div className='text-center'>
						<div
							className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'
						>
							<Mail className='h-8 w-8 text-white' />
						</div>
						<p className='text-gray-300 mb-6'>
							If an account exists for {email}, you will receive a password reset link shortly.
						</p>
					</div>
				)}
			</div>

			<div className='px-8 py-4 bg-gray-200 bg-opacity-50 flex justify-center'>
				<Link to={"/login"} className='text-xl text-purple-700 hover:underline flex items-center'>
					<ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
				</Link>
			</div>
		</div>
		<div className="absolute inset-0 bg-purple-900 opacity-30 z-0"></div>
	</div>
	);
};
export default ForgotPasswordPage;
