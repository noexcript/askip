export default function Interrogation() {
    return (
        <div className="relative group">
            <span className="flex items-center justify-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-sm md:text-lg rounded-full border-[2px] md:border-[3px] bg-slate-950 cursor-default">?</span>
            <div className="flex absolute  opacity-0  group-hover:opacity-100 py-2 p-7 bg-black text-white bg-opacity-95   rounded-md shadow-2xl transition duration-500 ease-in-out w-[320px] roboto-regular text-center text-lg -right-[40%]   md:-left-28 transform md:-translate-x-28  lg:left-1/2  lg:-translate-x-1/2 z-20 top-full">
                Para participares, deves cumprir os seguintes pré-requisitos: subscrever o canal no YouTube, deixar um gosto e comentar o último vídeo, e seguir a página da ASKIP no Instagram.
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-blue-900/95 to-green-800/95 rotate-45 border-r border-b border-white/10" />
            </div>
        </div>
    )
}