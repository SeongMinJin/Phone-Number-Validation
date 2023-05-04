'use client'

import React, { useEffect, useState } from "react";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);


export default function Search({
	searchParams,
}: {
	searchParams: {
		number: string;
	}
}) {
	const { number } = searchParams;
	const [state, setState] = useState(false);
	const [component, setComponent] = useState(<Static valid={undefined} carrier={undefined} search={undefined} searchCount={undefined} report={undefined} reportCount={undefined}/>);
	useEffect(() => {
		const dataFetch = async (n: string) => {
			const result = await (
				await fetch(`http://172.21.0.4:3001/search/${n}`)
			).json();
			setComponent(<Static valid={result.result.valid} carrier={result.result.carrier} search={result.search} searchCount={result.searchCount} report={result.report} reportCount={result.reportCount} />);
			setState(true);
		}
		dataFetch(number);
	}, []);


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
				{ state ? component
				:
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
			}
			</div>
		</>
	);
}

function Static({ valid, carrier, searchCount, search, reportCount, report } : {
	valid: boolean | undefined,
	carrier: string | undefined,
	searchCount: number | undefined,
	search: {
		id: number,
		date: Date,
	} [] | undefined,
	reportCount: number | undefined,
	report: {
		id: number,
		date: Date,
	} [] | undefined,
}) {


	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: '최근 조회 및 신고 현황',
			},
		},
	};

	
	const searchData = parseData(search);
	const reportData = parseData(report);
	


	const labels: string[] = [];
	for (let i = 0; i < searchData.length; ++i) {
		labels.push(searchData[i].month.toString() + '월 ' + searchData[i].date.toString() + '일')
	};



	const data = {
		labels,
		datasets: [
			{
				label: '조회',
				data: searchData.map(data => data.count),
				backgroundColor: 'rgb(74 222 128)',
			},
			{
				label: '신고',
				data: reportData.map(data => data.count),
				backgroundColor: 'rgb(248 113 113)',
			}
		]
	}

	return (
		<>
			<div>
				<div className="flex flex-col items-center justify-center font-mono text-lg">
					<div className="flex">
						<p>해당 번호는 </p>
					{ valid ?  <p className="mx-4 text-blue-600 animate-bounce">존재하는</p>: <p className="mx-4 text-red-400 animate-bounce" > 존재하지 않는</p>}
						<p>번호 입니다</p>
					</div>
				{ valid ? <p className=" text-xl">통신사: {carrier}</p> : ''}
				</div>
				<Line options={options} data={data} />
			</div>
		</>
	);
}



function parseData(data: {
	id: number,
	date: Date,
}[] | undefined) 
{
	const labels: {
		month: number,
		date: number,
		count: number,
	}[] = [];

	const date = new Date(Date.now());
	const tmp = date;
	date.setDate(date.getDate() - 6);
	for (let i = 0; i < 7; ++i) {
		labels.push({
			month: date.getMonth() + 1,
			date: date.getDate(),
			count: 0,
		});
		date.setDate(date.getDate() + 1);
	}
	date.setDate(tmp.getDate() - 6);
	if (data) {
		if (data.length) {
			for (let i = 0; i < data.length &&  new Date(data[i].date).getTime() > date.getTime(); ++i) {
				let index = labels.findIndex(label => label.date === new Date(data[i].date).getDate() && label.month === (new Date(data[i].date).getMonth() + 1));
				++labels[index].count;
			}
		}
	}
	return labels;
}