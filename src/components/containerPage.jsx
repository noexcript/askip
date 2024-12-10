export default function ContainerPage({ children }) {
    return (
        <div className=" relative w-full  h-[calc(100vh-7rem)]  md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4.5rem)] xl:h-[calc(100vh-4.5rem)] flex items-center justify-center">
            {children}
        </div>
    )
}