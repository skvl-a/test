"use client";

import Image from "next/image";

import AsideContainer from "@/components/common/asides";
import AsideBackgroundLayout from "@/components/common/asides/background.aside";
import { Button } from "@/components/ui/button";
import { globalState } from "@/store/store";
import { Icon as ButtonIcon } from "../../app/_icons/index";

export default function HomeView() {
	const users = [
		{
			id: 1,
			image: "/images/user-1.png",
		},
		{
			id: 2,
			image: "/images/user-1.png",
		},
		{
			id: 3,
			image: "/images/user-1.png",
		},
		{
			id: 4,

			image: "/images/user-1.png",
		},
		{
			id: 5,
			image: "/images/user-1.png",
		},
	];

	const onOpenAside = () => {
		return globalState.toggleAside();
	};

	const onRegenerate = () => {};

	return (
		<>
			<div className="items-center justify-items-center min-h-screen p-8 pb-20">
				<div className="max-w-[876px] mx-auto">
					<h1 className="mb-6  text-[26px] font-bold tracking-tight text-balance">
						Choose an AI avatar
					</h1>
					<div className="grid grid-cols-[1fr_280px] gap-8">
						<div className="grid grid-cols-5 gap-2">
							{users.map((item) => {
								return (
									<div key={item.id}>
										<Image
											priority
											width={107}
											height={190}
											className="rounded-xl border-2 border-gray-50"
											src={item.image}
											alt="Picture of the author"
										/>
									</div>
								);
							})}
						</div>

						<div className="relative">
							<div className="relative">
								<Image
									priority
									width={280}
									height={500}
									className="rounded-xl"
									src="/images/main-user.jpg"
									alt="Picture of the author"
								/>
							</div>

							<Button
								onClick={onOpenAside}
								className="bg-black-opacity cursor-pointer rounded-lg border-none shadow-none absolute text-white font-semibold top-2 left-1/2 -translate-x-1/2 "
								variant="outline"
							>
								<ButtonIcon />
								Change background
							</Button>
						</div>
					</div>
				</div>
			</div>

			<AsideContainer
				title="Change background"
				renderContent={() => {
					return <AsideBackgroundLayout onReGenerate={onRegenerate} />;
				}}
			/>
		</>
	);
}
