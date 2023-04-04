'use client'

import { useState } from "react";
import Link from "next/link";

export default function Home() {

	const [first, setFirst] = useState("");
	const [middle, setMiddle] = useState("");
	const [last, setLast] = useState("");

	return (
		<>
			<div className='
				relative 
				min-h-screen
				flex
				flex-col
				items-center
				justify-center
			'>
				<div className='mb-4'>
					<h1 className='animate-bounce font-mono text-xl'>핸드폰 번호를 조회해보세요.</h1>
				</div>
				<div className='flex'>
					<div className='border-2 focus:border-none rounded-lg shadow-xl'>
						<input onChange={(e) => {setFirst(e.target.value)}} type='tel' name='first' maxLength={4} className='text-center w-16 rounded-md focus:outline-none focus:ring focus:ring-lime-300 duration-300'>
						</input>
					</div>
					<p className='mx-3'>-</p>
					<div className='border-2 focus:border-none rounded-lg shadow-xl'>
						<input onChange={(e) => {setMiddle(e.target.value)}} type='tel' name='middle' maxLength={4} className='text-center w-16 rounded-md focus:outline-none focus:ring focus:ring-lime-300 duration-300'>
						</input>
					</div>
					<p className='mx-3'>-</p>
					<div className='border-2 focus:border-none rounded-lg shadow-xl'>
						<input onChange={(e) => {setLast(e.target.value)}} type='tel' name='last' maxLength={4} className='text-center w-16 rounded-md focus:outline-none focus:ring focus:ring-lime-300 duration-300'>
						</input>
					</div>
				</div>
				<Link href={{
					pathname: "/result",
					query: {
						number: first + middle + last,
					}
				}}>조회</Link>
			</div>
			<script src="main.js"></script>
		</>
	);
}
