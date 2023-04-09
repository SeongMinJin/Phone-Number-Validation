import React from "react";

export default async function Search({
	searchParams,
}: {
	searchParams: {
		number: string;
	}
}) {
	const { number } = searchParams;

	// const result = await fetch(`http://localhost:3001/search/${number}`,)
	// .then(Response => Response.json())
	// .then(result => {
	// 	return result
	// })

	const result = {
		valid: true,
	}

	return (
		<>
			<div className='
				relative
				min-h-screen bg-slate-300
				flex
				flex-col
				items-center
				justify-center
			'>
				<div className="flex font-mono text-2xl">
					<p>해당 번호는 </p>
					{result.valid ? <p className="mx-4 animate-bounce text-blue-700"><strong> 존재하는 </strong> </p> : <p className="mx-4 animate-bounce text-red-600"><strong> 없는 </strong> </p>}
					<p>번호입니다.</p>
				</div>
				<Static number={number} />
			</div>
		</>
	);
}


function Static({ number } : {
	number: string
}) {
	
	// const result = fetch(`http://localhost:3001/search/history/${number}/30`)
	// .then(res => res.json())
	// .then(result => {
	// 	console.log(result);
	// 	return result;
	// })
	



	return (
		<div className="rounded-md w-auto h-auto bg-white  mt-4">
			<div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
				<div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				<div className="flex items-baseline mt-4 space-x-6">
					<div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
					<div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
					<div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
					<div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
					<div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
					<div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
					<div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
				</div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}