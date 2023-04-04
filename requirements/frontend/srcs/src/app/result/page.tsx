export default async function Result({
	searchParams,
}: {
	searchParams: {
		number: string;
	}
}) {
	const {number} = searchParams;

	// const result = await fetch(`https://api.apilayer.com/number_verification/validate?number=+82${number.substring(1)}`, {
	// 	method: "GET",
	// 	headers: {
	// 		apikey: "RisW7Sm33iFiecT3381KLBrUCyhr5cpx",
	// 	}
	// })
  // .then(response => response.json())
  // .then(result => {
	// 	return result;
	// })
  // .catch(error => console.log('error', error));
	const result = {
		valid: true,
		carrier: 'SK'
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
					{ result.valid ? <p className="mx-4 animate-bounce text-blue-700"><strong> 존재하는 </strong> </p> : <p className="mx-4 animate-bounce text-red-600"><strong> 없는 </strong> </p> }
					<p>번호입니다.</p>
				</div>
				<Static />
			</div>
		</>
	);
}


function Static() {
	return (
		<div className="rounded-md bg-white w-3/4 h-64 mt-4">
		</div>
	);
}