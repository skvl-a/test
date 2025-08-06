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
			<SheetContent className="bg-white pb-6" onClose={onClose}>
				<SheetHeader className="px-4 pt-8 mb-6">
					<SheetTitle className="text-[22px] font-semibold">{title}</SheetTitle>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min overflow-auto gap-6 px-4">
					{renderContent()}
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default AsideContainer;
