export default function WrapperPage({ children, className }) {
    return (
        <div className={`container w-full flex-col flex  items-center justify-center bg-transparent p-4 gap-5 z-10 ${className && className} overflow-x-hidden`}>
            {children}
        </div>
    )
}