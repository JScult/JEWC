export default function GuideSection() {
    return (
      <section>
        {/* Title */}
        <div>
          <h1 className="text-[#BD1829] font-bold text-center text-2xl p-5 lg:text-left lg:text-5xl">
            PARTICIPANT GUIDE
          </h1>
          <p className="font-semibold text-center lg:text-left p-5 lg:text-3xl">
            <span className="text-[#6D5295]">Do's</span> &{' '}
            <span className="text-[#BD1829]">Dont's</span>
          </p>
        </div>
  
        <div className="mx-auto">
          {/* First Container - Do's */}
          <div className="bg-[#F5F6F9] md:p-12 m-5 md:m-12 rounded-4xl flex flex-col lg:flex-row gap-10 overflow-hidden">
            <img
              className="hidden md:block w-full lg:w-auto max-w-sm object-cover rounded-l-4xl"
              src="Assets/Rectangle 4172.png"
              alt="Guide visual"
            />
  
            <ul className="my-auto p-6 space-y-5 list-disc list-inside marker:text-[#6D5295] text-base md:text-lg lg:text-2xl lg:space-y-10">
              <li>
                <span className="text-[#6D5295] font-bold">Be in time :</span> Respect the schedule and make the most of every session
              </li>
              <li>
                <span className="text-[#6D5295] font-bold">Network :</span> Connect with fellow attendees, speakers, and exhibitors.
              </li>
              <li>
                <span className="text-[#6D5295] font-bold">Take Notes :</span> Capture key insights, ideas, and action points throughout the event.
              </li>
              <li>
                <span className="text-[#6D5295] font-bold">Enjoy the programme :</span>  Immerse yourself in the experience, learn, engage, and have fun!
              </li>
            </ul>
          </div>
  
          {/* Second Container - Don'ts */}
          <div className="bg-[#F5F6F9] md:p-12 m-5 md:m-12 rounded-4xl flex flex-col lg:flex-row gap-10 overflow-hidden">
            <img
              className="hidden md:block w-full lg:w-auto max-w-sm object-cover rounded-l-4xl"
              src="Assets/Rectangle 4173.png"
              alt="Guide visual"
            />
  
            <ul className="my-auto p-6 space-y-5 list-disc list-inside marker:text-[#BD1829] text-base md:text-lg lg:text-2xl lg:space-y-10">
              <li>
                <span className="text-[#BD1829] font-bold">Don't arrive late :</span>  Late arrivals can miss out and disrupt others.
              </li>
              <li>
                <span className="text-[#BD1829] font-bold">Don't interrupt :</span> Be respectful during sessions and conversations.
              </li>
              <li>
                <span className="text-[#BD1829] font-bold">Don't disengage :</span>  Avoid spending the event on your phone or being distracted.
              </li>
              <li>
                <span className="text-[#BD1829] font-bold">Don't just stick with your group :</span> Step out, meet new people, and expand your network!
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }