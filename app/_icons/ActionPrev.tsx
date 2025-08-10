import type { SVGProps } from "react";
import * as React from "react";

const SvgActionPrev = (props: SVGProps<SVGSVGElement>) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 17 16"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M6.058.654c.26.26.26.682 0 .942l-2.74 2.74h8.006a5.603 5.603 0 0 1 0 11.206H8.63a.667.667 0 0 1 0-1.334h2.693a4.27 4.27 0 0 0 0-8.538H3.318l2.74 2.74a.667.667 0 1 1-.943.943l-4.35-4.35 4.35-4.35c.26-.26.683-.26.943 0"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgActionPrev;
