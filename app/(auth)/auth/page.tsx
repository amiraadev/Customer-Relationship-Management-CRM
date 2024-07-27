/** @format */

import AuthTabs from "@/components/auth/AuthTabs";
import ThemeToggler from "@/components/ThemeToggler";

const AuthPage = () => {
	return (
		<>
			<AuthTabs />
			<div className='absolute bottom-5 right-0 text-white'>
				<ThemeToggler />
			</div>
		</>
	);
};

export default AuthPage;
