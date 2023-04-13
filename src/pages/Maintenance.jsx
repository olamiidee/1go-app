const Maintenance = () => {
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
            Sorry for the inconvenience. We’re performing some maintenance at
            the moment. we’ll be back up shortly!
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
