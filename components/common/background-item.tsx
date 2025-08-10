import Image from "next/image";
import Progressbar from "@/components/common/progressbar";
import { cn } from "@/lib/utils";

function BackgroundItem({
	loadingValue,
	isDefault,
	isLoading,
}: {
	loadingValue?: number;
	isDefault?: boolean;
	isLoading?: boolean;
}) {
	return (
		<div
			className={cn(
				"relative border-transparent overflow-hidden border-2 rounded-xl",
				{
					["border-black"]: isDefault,
				},
			)}
		>
			<div className="relative">
				<Image
					priority
					width={107}
					height={190}
					className="block w-full"
					src="/images/user-1.png"
					alt="Picture of the author"
				/>
			</div>

			{isDefault && (
				<div className="absolute left-[7px] top-[6px] bg-white rounded-md px-1 pt-0.5 border-2 border-gray-50">
					<p className="uppercase text-[10px] font-bold text-gray-100">
						default
					</p>
				</div>
			)}

			{isLoading && (
				<div className="absolute left-0 right-0 top-0 bottom-0 z-10 bg-black flex flex-col items-center justify-center">
					<div className="mt-auto relative top-[14px]">
						<Progressbar value={loadingValue ?? 0} />
					</div>

					<p className="text-white font-semibold mb-2.5 text-[12px] mt-auto">
						1 minute left
					</p>
				</div>
			)}
		</div>
	);
}

export default BackgroundItem;
