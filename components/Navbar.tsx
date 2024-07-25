/** @format */

import Image from "next/image";
import Link from "next/link";

import logo from "../img/logo-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
	return (
		<div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
			<Link href='/'>
				<Image src={logo} alt='Dashboard' width={40} />
			</Link>
			<DropdownMenu>
				<DropdownMenuTrigger className='focus:outline-none'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
						<AvatarFallback className='text-black'>BT</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href='/profile'>Profile</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href='/auth'>Logout</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Navbar;
