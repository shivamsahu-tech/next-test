import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full min-h-[74vh] flex flex-col lg:flex-row items-center px-5 md:px-16 lg:px-36 py-12 lg:py-0 overflow-hidden">
 
      <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-12 mt-20 lg:mt-0">
        
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-normal leading-tight tracking-tight lg:text-left text-gray-900 dark:text-white">
          Password Protection
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-[18px] font-light leading-relaxed lg:text-left">
          Your passwords are the keys to your digital life. We help you create,
          store, and manage strong, unique passwords for every account - so you
          never have to worry about hackers guessing or stealing them again.
        </p>
      </div>

      <div className="w-full lg:w-[60%] flex justify-center items-center mt-12 lg:mt-0">
        <div className="relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[80%]">
            <Image
            src="/password-protection/lock.png"
            alt="Lock Security Illustration"
            width={700}
            height={700}
            className="object-contain w-full h-auto drop-shadow-xl"
            priority
            />
        </div>
      </div>
      
    </div>
  );
}