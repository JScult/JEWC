'use client';

import React, { useState, useEffect } from 'react';
import styles from './registerTimeSection.module.css';

export default function RegisterTimeSection() {
  const targetDate = new Date('2025-09-18T00:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString(),
      seconds: Math.floor((difference % (1000 * 60)) / 1000).toString(),
    };
  };

  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });

  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevTimeLeft(timeLeft);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatNumber = (num: number | string) =>
    num.toString().padStart(2, '0');

  const shouldFlip = (key: keyof typeof timeLeft) =>
    timeLeft[key] !== prevTimeLeft[key];

  return (
    <section className="bg-white px-3 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 text-red-700 w-full mt-6 sm:mt-8 lg:mt-10">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 sm:gap-6">
        <div className="text-center lg:text-left">
          <h2 className="text-[#BD1829] font-bold text-xl sm:text-3xl lg:text-5xl p-3 sm:p-4 lg:p-5">
            REGISTER NOW
          </h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">
            Count Every Second Until Event
          </p>
        </div>
        <p className="mt-2 lg:mt-0 text-xs sm:text-sm lg:text-base max-w-[200px] sm:max-w-xs lg:max-w-sm text-center lg:text-right">
          Secure your spot at The Junior Enterprises World Conference 2025, and join us!
        </p>
      </div>

      <div className="bg-[#f7f7f7] rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-8 lg:p-12 flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 w-full">
        {[
          { label: 'DAYS', value: timeLeft.days, key: 'days' },
          { label: 'HOURS', value: timeLeft.hours, key: 'hours' },
          { label: 'MINUTES', value: timeLeft.minutes, key: 'minutes' },
          { label: 'SECONDS', value: timeLeft.seconds, key: 'seconds' },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#BD1829] text-white rounded-lg sm:rounded-xl lg:rounded-2xl flex flex-col items-center justify-center w-16 sm:w-20 lg:w-28 h-20 sm:h-24 lg:h-32 overflow-hidden"
          >
            <div className="relative w-full h-2/3 flex items-center justify-center bg-[#BD1829] shadow-inner">
              <span
                className={`absolute text-lg sm:text-xl lg:text-3xl font-medium ${
                  shouldFlip(item.key as keyof typeof timeLeft)
                    ? styles.flip
                    : ''
                }`}
              >
                {formatNumber(item.value)}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs lg:text-sm mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}