/** @format */

import DashboardCard from "@/components/dashboard/DashboardCard";
import { User } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className='flex flex-col justify-between gap-5 mb-5 md:flex-row'>
				<DashboardCard title={"title"} count={50} icon={User} />
			</div>
		</>
	);
}
