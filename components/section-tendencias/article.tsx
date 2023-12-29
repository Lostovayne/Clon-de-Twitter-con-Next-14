import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactNode;
    className: string;
}

export const Article = ({ children, className = "" }: Props) => {
    return <div className={cn("w-full", className)}>{children}</div>;
};
