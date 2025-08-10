import type { ReactNode } from "react";
import { useSnapshot } from "valtio/react";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { globalState } from "@/store/store";

function AsideContainer({
	title,
	renderContent,
}: {
	renderContent: () => ReactNode;
	title: string;
}) {
	const snapshot = useSnapshot(globalState);

	const onClose = () => {
		return globalState.toggleAside();
	};

	const isOpenAside = !!snapshot.isOpenAside;

	return (
		<Sheet open={isOpenAside}>
			<SheetContent
				className="bg-white pb-6 min-w-[400px] gap-0"
				onClose={onClose}
			>
				<SheetHeader className="px-5 pt-[29px] mb-0 pb-[18px]">
					<SheetTitle className="text-[22px] font-semibold">{title}</SheetTitle>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min overflow-auto gap-0 px-5">
					{renderContent()}
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default AsideContainer;
