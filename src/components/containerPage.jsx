export default function ContainerPage({ children, className }) {
    return (
        <div className={`w-full flex-1 flex items-center justify-center ${className && className}`}>
            {children}
        </div>
    )
}