

export default function Report({
	searchParams,
}: {
	searchParams: {
		number: string;
	}
}) {
	const { number } = searchParams;

	fetch(`http://localhost:3001/report/${number}`);

	return (
		<div className=" min-h-screen flex justify-center items-center">
			<h3>신고가 완료되었습니다.</h3>
		</div>
	);
}