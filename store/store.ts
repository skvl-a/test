import { proxy } from "valtio/vanilla";

export const globalState = proxy({
	isOpenAside: false,
	toggleAside() {
		globalState.isOpenAside = !globalState.isOpenAside;
	},
});
