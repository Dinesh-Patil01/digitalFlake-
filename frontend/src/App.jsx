
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Roles from "./pages/Roles";
import Users from "./pages/Users";
import Layout from "./Layout";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";


const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	return children;
};


const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated } = useAuthStore();

	if (isAuthenticated) {
		return <Navigate to='/' replace />; 
	}

	return children;
};

function App() {
	return (
		<div className='min-h-screen flex items-start justify-start relative overflow-hidden bg-url("")'>
			<Routes>
				<Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>}>
					<Route index element={<Home />} />
					<Route path="roles" element={<Roles />} />
					<Route path="users" element={<Users />} />
				</Route>

				<Route path='/signup' element={<RedirectAuthenticatedUser><SignUpPage /></RedirectAuthenticatedUser>} />
				<Route path='/login' element={<RedirectAuthenticatedUser><LoginPage /></RedirectAuthenticatedUser>} />
				<Route path='/forgot-password' element={<RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser>} />
				<Route path='/reset-password/:token' element={<RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser>} />

			
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;

