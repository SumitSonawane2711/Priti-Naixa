import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={cn(" w-full  mx-auto p-4 md:px-8", className)}>
			{children}
		</div>
	);
};

export default Container;