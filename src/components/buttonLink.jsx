import { useContext } from "react"
import { Context } from "../context"

export default function ButtonLink() {
  const { storeClick, registerClick } = useContext(Context)

  const handlerClick = async () => {
    await storeClick()
    await registerClick()

  }
  return (
    <a
    
      href="https://scwz.me/WjSANr"
      target="_blank"
      className="btn-color roboto-regular  relative inline-block  rounded-sm shadow-2xl bg-transparent text-blue-950  font-normal p-3 px-6 rounded-0 group overflow-hidden hover:bg-gradient-to-r border border-white
        bg-white
           hover:font-semibold
           hover:text-white"
    >
      Quero participar
      <span className="absolute inset-0 w-full h-full bg-blue-300 opacity-0 group-hover:opacity-50 group-hover:translate-x-full transition-all duration-500 rounded-full"></span>
    </a>
  )


}