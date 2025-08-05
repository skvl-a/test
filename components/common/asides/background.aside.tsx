import ActionNextIcon from "@/app/_icons/ActionNext";
import ActionPrevIcon from "@/app/_icons/ActionPrev";
import SvgReGenerateIcon from "@/app/_icons/ReGenerateIcon";
import BackgroundItem from "@/components/common/background-item";
import { Button } from "@/components/ui/button";

function AsideBackgroundLayout({ onReGenerate }: { onReGenerate: () => void }) {
	return (
		<div>
			<p className="text-[14px] font-semibold mb-3">Background idea</p>

			<div className="p-4 border relative border-gray-50 rounded-xl min-h-[200px] pb-[60px] mb-6">
				<p className="text-[14px] font-medium">
					Animate glowing rays pulsating from behind the bottle, leaves gently
					swaying, and golden sparkles floating upward for a natural, radiant
					effect. Regenerate 0/700
				</p>

				<div className="min-h-[35px] absolute bottom-0 left-0 right-0 flex items-center justify-between">
					<Button
						onClick={onReGenerate}
						className="cursor-pointer border-none shadow-none outline-0 focus:outline-none"
					>
						<SvgReGenerateIcon />
						Regenerate
					</Button>

					<div className="flex items-center">
						<Button className="shadow-none border-none cursor-pointer">
							<ActionPrevIcon />
						</Button>

						<Button className=" shadow-none border-none cursor-pointer">
							<ActionNextIcon />
						</Button>
					</div>
				</div>
			</div>

			<div className="mb-10">
				<Button className="h-[48px] cursor-pointer w-full rounded-full bg-black text-white">
					<SvgReGenerateIcon /> Generate BG for 1 credit
				</Button>
			</div>

			<div>
				<p className="text-[14px] font-semibold mb-3">Background idea</p>

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
		</div>
	);
}

export default AsideBackgroundLayout;
