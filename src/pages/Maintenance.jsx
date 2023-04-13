import { useEffect, useState } from "react";

const Maintenance = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("April 23, 2023");

      // Calculate the time difference between today and the target date
      const timeDiff = targetDate.getTime() - now.getTime();

      // Calculate the remaining days, hours, minutes and seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      // Update the countdown timer
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-screen p-0 md:py-[100px] flex items-center justify-center">
      <div class="w-full flex items-center justify-center h-screen md:h-[600px] py-12 px-5 bg-blue-500">
        <div className="bg-white p-3 rounded-full absolute top-5 left-5 md:left-[50%] md:translate-x-[-50%]">
          <img
            alt=""
            src="/images/logo.png"
            className="w-12 h-12 md:w-14 md:h-14"
          />
        </div>
        <div class="flex flex-col items-center justify-center max-w-2xl">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20 text-yellow-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 class="mb-3 text-3xl font-bold text-center text-purple-100">
            We’ll be back soon!
          </h1>
          <p class="text-center text-gray-100">
            Testing of the 1go platform is over, official launch commences on{" "}
            <strong>23rd April 2023!</strong>
          </p>
          <p class="mb-3 text-4xl font-bold text-center text-purple-100 mt-8 flex gap-3">
            <p>
              {" "}
              0{countdown.days} :<br />
              <span className="text-[.8rem] relative top-[-20px] left-[-10px]">
                Days
              </span>
            </p>
            <p>
              {countdown.hours} :<br />
              <span className="text-[.8rem] relative top-[-20px] left-[-10px]">
                Hours
              </span>
            </p>
            <p>
              {countdown.minutes} :<br />
              <span className="text-[.8rem] relative top-[-20px] left-[-8px]">
                Mins
              </span>
            </p>
            <p>
              {countdown.seconds}
              <br />
              <span className="text-[.8rem] relative top-[-20px] left-[-6px]">
                SEcs
              </span>
            </p>
          </p>

          <p className="text-white md:text-black absolute bottom-8">
            If you need to, you can always{" "}
            <a
              class="text-yellow-400 underline"
              href="https://wa.me/+2349135921624"
            >
              Contact us{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
