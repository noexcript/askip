import { cn } from "@/lib/utils"

export default function ContainerPage({ children, className }) {
    return (
        <div className={cn("w-full flex-1 flex items-center justify-center", className)}>
            {children}
        </div>
    )
}