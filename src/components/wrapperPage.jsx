export default function WrapperPage({ children }) {
    return (
        <div className="container w-full flex-col flex h-full items-start justify-center  p-4 gap-5 relative z-10">
            {children}
        </div>
    )
}