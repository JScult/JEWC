export default function CregisterTimeSection() {
    return (
        <section className="bg-white px-6 py-12 text-red-700 w-full mt-10 ">
       
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-2.5">
          <div>
            <h2 className="text-[#BD1829] font-bold text-center text-2xl p-5  lg:text-5xl lg:text-left">REGISTER NOW</h2>
            <p className="mt-2 text-sm">Count Every Second Until Event</p>
          </div>
          <p className="mt-4 lg:mt-0 text-sm max-w-sm text-center ">
            Secure your spot at The Junior Enterprises World Conference 2025, and join us!
          </p>
        </div>
  
        <div className="bg-[#f7f7f7] rounded-3xl shadow-md mt-10 p-12 flex flex-wrap justify-center gap-4 w-full ">
          {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label, i) => (
            <div
              key={i}
              className="bg-[#BD1829] text-white rounded-2xl flex flex-col items-center justify-center w-24 sm:w-28 h-28 sm:h-32"
            >
              <span className="text-2xl sm:text-3xl font-medium">00</span>
              <span className="text-xs sm:text-sm mt-1">{label}</span>
            </div>
          ))}
        </div>
      </section>
    );
    
  }