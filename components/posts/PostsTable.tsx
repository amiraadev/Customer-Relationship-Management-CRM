/** @format */

import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHead,
	TableRow,
	TableCaption,
} from "../ui/table";

interface PostsTableProps {
	limit?: number;
	title?: string;
}
const PostsTable = ({ limit, title }: PostsTableProps) => {
    // Sort posts on descending order based on dates
    const sortedPosts:Post[] = [...posts].sort((a,b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime());
    
	return (
		<div className='mt-10'>
			<h3 className='text-2xl mb-4 font-semibold'>{title ? title : "Posts"}</h3>
			<Table>
				<TableCaption>A list of recent posts</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead className='hidden md:table-cell'>Author</TableHead>
						<TableHead className='hidden md:table-cell text-right'>
							Date
						</TableHead>
						<TableHead className='hidden md:table-cell text-right'>
							View
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{posts.map((post) => (
						<TableRow key={post.id}>
							<TableCell>{post.title}</TableCell>
							<TableCell className='hidden md:table-cell'>
								{post.author}
							</TableCell>
							<TableCell className='hidden md:table-cell text-right'>
								{post.date}
							</TableCell>
							<TableCell className='hidden md:table-cell text-right'>
								<Link href={`/posts/edit/${post.id}`}>
                                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                                    Edit</button></Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PostsTable;
