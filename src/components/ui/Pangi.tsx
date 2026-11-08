import PangiMaskot from "../../assets/pangi.webp"

export const Pangi = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
        <div className="bg-white rounded-xl w-13 h-13 flex justify-center items-center">
            <div>
                <img 
                src={PangiMaskot} 
                alt="Pangi" />
            </div>
        </div>
        <span className="bg-brand-yellow text-black border border-white text-xs px-3 rounded-4xl z-50 absolute -bottom-2">
            Tips!
        </span>
    </div>
  )
}