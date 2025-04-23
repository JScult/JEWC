import Image from 'next/image';

export default function GuideSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center lg:text-left">
        <h1 className="text-[#BD1829] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 sm:p-5">
          PARTICIPANT GUIDE
        </h1>
        <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl p-4 sm:p-5">
          <span className="text-[#6D5295]">Do's</span> &{' '}
          <span className="text-[#BD1829]">Dont's</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* First Container - Do's */}
        <div className="bg-[#F5F6F9] m-4 sm:m-6 md:m-8 lg:m-10 rounded-3xl flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 overflow-hidden">
          <div className="relative w-full lg:w-1/3 h-64 sm:h-80 lg:h-auto">
            <Image
              className="block w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none"
              src="/Assets/does.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="Do's guide visual"
              priority
            />
          </div>

          <ul className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 lg:space-y-8 list-disc list-inside marker:text-[#6D5295] text-sm sm:text-base md:text-lg lg:text-xl">
            <li>
              <span className="text-[#6D5295] font-bold">Be in time:</span> Respect the schedule and make the most of every session
            </li>
            <li>
              <span className="text-[#6D5295] font-bold">Network:</span> Connect with fellow attendees, speakers, and exhibitors.
            </li>
            <li>
              <span className="text-[#6D5295] font-bold">Take Notes:</span> Capture key insights, ideas, and action points throughout the event.
            </li>
            <li>
              <span className="text-[#6D5295] font-bold">Enjoy the programme:</span> Immerse yourself in the experience, learn, engage, and have fun!
            </li>
          </ul>
        </div>

        {/* Second Container - Don'ts */}
        <div className="bg-[#F5F6F9] m-4 sm:m-6 md:m-8 lg:m-10 rounded-3xl flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 overflow-hidden">
          <div className="relative w-full lg:w-1/3 h-64 sm:h-80 lg:h-auto">
            <Image
              className="block w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none"
              src="/Assets/dont.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="Don'ts guide visual"
              priority
            />
          </div>

          <ul className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 lg:space-y-8 list-disc list-inside marker:text-[#BD1829] text-sm sm:text-base md:text-lg lg:text-xl">
            <li>
              <span className="text-[#BD1829] font-bold">Don't arrive late:</span> Late arrivals can miss out and disrupt others.
            </li>
            <li>
              <span className="text-[#BD1829] font-bold">Don't interrupt:</span> Be respectful during sessions and conversations.
            </li>
            <li>
              <span className="text-[#BD1829] font-bold">Don't disengage:</span> Avoid spending the event on your phone or being distracted.
            </li>
            <li>
              <span className="text-[#BD1829] font-bold">Don't just stick with your group:</span> Step out, meet new people, and expand your network!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}