import { useState } from "react";
import ActionPrevIcon from "@/app/_icons/ActionBack";
import ActionNextIcon from "@/app/_icons/ActionNext";
import SvgReGenerateIcon from "@/app/_icons/ReGenerateIcon";
import BackgroundItem from "@/components/common/background-item";
import { Button } from "@/components/ui/button";
import { globalState } from "@/store/store";

function AsideBackgroundLayout({
	onReGenerate,
	onClose,
}: {
	onReGenerate: () => void;
	onClose?: () => void;
}) {
	const [value, setValue] = useState(
		"Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.",
	);

	return (
		<div>
			<p className="text-[14px] font-semibold mb-3">Background idea</p>

			<div className="relative pb-[60px] h-[195px] mb-[22px]">
				<textarea
					id="background-idea"
					name="background-idea"
					className="text-[14px] border p-4 border-gray-50 pb-[60px] pt-[14px] rounded-xl leading-[20px] font-medium outline-0 min-h-[195px] w-full resize-none focus:border-black"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				></textarea>

				<div className="bg-white min-h-[35px] pr-2 absolute bottom-[1px] rounded-xl left-[2px] right-[2px] flex items-center justify-between pt-[4px] pb-[8px]">
					<Button
						onClick={onReGenerate}
						className="cursor-pointer space-x-0 mt-0.5 p-0 pl-[16px] text-[12px] font-semibold border-none shadow-none outline-0 focus:outline-none"
					>
						<SvgReGenerateIcon />
						<span>Regenerate</span>
					</Button>

					<div className="flex items-center pr-2">
						<Button className="shadow-none border-none cursor-pointer p-0 group">
							<ActionPrevIcon className="!w-[20px] !h-[20px] transition-all text-[rgb(202_212_221)] group-hover:text-black" />
						</Button>

						<Button className=" shadow-none border-none cursor-pointer !px-2 group">
							<ActionNextIcon className="!w-[20px] !h-[20px] text-[rgb(202_212_221)] group-hover:text-black transition-all" />
						</Button>
					</div>
				</div>
			</div>

			<div className="mb-[37px]">
				<Button className="h-[48px] cursor-pointer w-full rounded-full bg-black text-white hover:bg-[rgba(0,0,0,0.8)] transition-all">
					<SvgReGenerateIcon /> Generate BG for 1 credit
				</Button>
			</div>

			<div className="mb-6">
				<p className="text-[14px] font-semibold mb-2">Your backgrounds</p>

				<div className="grid grid-cols-3 gap-2">
					<BackgroundItem isLoading loadingValue={23} />
					<BackgroundItem isDefault />
					<BackgroundItem />
					<BackgroundItem />
					<BackgroundItem />
					<BackgroundItem />
					<BackgroundItem />
					<BackgroundItem />
					<BackgroundItem />
				</div>
			</div>

			<div className="flex justify-between">
				<Button
					onClick={() => {
						return globalState.toggleAside();
					}}
					className="h-[48px] flex-1 cursor-pointer w-full rounded-full bg-black text-white hover:bg-[rgba(0,0,0,0.8)] transition-all"
				>
					Close
				</Button>
			</div>
		</div>
	);
}

export default AsideBackgroundLayout;
