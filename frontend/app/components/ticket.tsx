import Image from "next/image"

function Ticket() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-28 px-2">
      <Image 
        src="/Assets/Printable.png" 
        alt="Ticket" 
        width={1000} 
        height={1000} 
        className="w-full md:w-auto h-40 md:h-auto rotate-90 md:rotate-0" 
      />
    </div>
  )
}

export default Ticket