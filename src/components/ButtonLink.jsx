export default function ButtonLink(){
    return (
        <a 
          href="#" 
          className="relative inline-block border rounded-sm shadow-2xl bg-transparent text-pink-300 font-bold border-pink-300 p-2 px-4 rounded-0 group overflow-hidden hover:bg-gradient-to-r hover:from-violet-600 hover:via-blue-500 hover:to-pink-600 opacity-80 transition-all duration-500 hover:text-white hover:font-semibold"
        >
          Quero participar
          {/* Efeito de sobreposição */}
          <span className="absolute inset-0 w-full h-full bg-pink-300 opacity-0 group-hover:opacity-50 group-hover:translate-x-full transition-all duration-500 rounded-full"></span>
        </a>
      )
      
      
}