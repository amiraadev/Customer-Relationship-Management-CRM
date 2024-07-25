/** @format */

import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { User, Newspaper, Folder, MessageCircle } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className='flex flex-col justify-between gap-5 mb-5 md:flex-row'>
				<DashboardCard title={"Posts"} count={50} icon={Newspaper} />
				<DashboardCard title={"Categories"} count={12} icon={Folder} />
				<DashboardCard title={"Users"} count={750} icon={User} />
				<DashboardCard title={"Comments"} count={750} icon={MessageCircle} />
			</div>
      <PostsTable title="Latest Posts" limit={5}/>
		</>
	);
}
