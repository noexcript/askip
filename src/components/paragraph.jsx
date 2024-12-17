export default function Paragraph({ children }) {
    return (
        <div className="w-full flex items-start justify-start flex-col gap-20">
            {children}
        </div>
    )
}