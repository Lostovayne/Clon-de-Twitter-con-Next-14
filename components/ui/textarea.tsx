import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[60px] w-full rounded-md   bg-transparent px-3 py-2 text-sm  placeholder:text-muted-foreground   disabled:cursor-not-allowed disabled:opacity-50 dark:caret-slate-200 focus:visible:outline-none outline-none border-none shadow-none ring-0",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
