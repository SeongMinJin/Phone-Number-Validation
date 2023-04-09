'use client'

import React, { useState } from "react";
import Search from "./search/page";
import { Report } from "./report/page";
import Link from "next/link";
export default function Home() {

	const [icon, setIcon] = useState('search');
	const [phoneNumber, setPhoneNumber] = useState('');
	return (
		<>
			<div className="flex flex-col justify-center items-center min-h-screen">
				<div className="flex space-x-4 items-center mb-10">
					<button className="font-thin p-2 rounded-full duration-500 bg-green-400 text-white" onClick={() => { toggle('search'); setIcon('serach'); }}>조회하기</button>
					<button className="font-thin p-2 rounded-full duration-500" onClick={() => { toggle('report'); setIcon('report') }}>신고하기</button>
				</div>
				<div className="flex">
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
						</div>
						<input onChange={(e) => setPhoneNumber(e.target.value)} id="input" autoFocus type="tel" placeholder="01012345678" className=" rounded-sm shadow-sm pl-10 h-10 w-72 bg-gray-50 focus:outline-none  focus:ring-2 focus:ring-green-400 focus:border-green-400 duration-300" ></input>
					</div>
						<Link href={`/${icon}/${phoneNumber}`} className="ml-4 items-center flex justify-center">
						{ icon === 'report'
							? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>
							: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
						}
						</Link>
				</div>
			</div>
		</>
	);
}





const toggle = (focus: string) => {
	const buttons = document.querySelectorAll('button');
	const input = document.getElementById('input');

	if (focus === 'search') {
		buttons[0].classList.add("bg-green-400", "text-white");
		buttons[1].classList.remove("bg-red-400", "text-white")
		input?.classList.add("focus:ring-green-400", "focus:border-green-400");
		input?.classList.remove("focus:ring-red-400", "focus:border-red-400");
	} else {
		buttons[0].classList.remove("bg-green-400", "text-white");
		buttons[1].classList.add("bg-red-400", "text-white")
		input?.classList.add("focus:ring-red-400", "focus:border-red-400");
		input?.classList.remove("focus:ring-green-400", "focus:border-green-400");
	}
	input?.focus();
}
