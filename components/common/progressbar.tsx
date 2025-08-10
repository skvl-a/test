import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progressbar({ value }: { value: number }) {
	return (
		<CircularProgressbar
			styles={buildStyles({
				strokeLinecap: "round",
				textColor: "#fff",
				pathColor: "rgba(91, 240, 165, 1)",
			})}
			strokeWidth={4}
			value={value}
			text={`${value}%`}
			className="max-w-[64px]"
		/>
	);
}

export default Progressbar;
