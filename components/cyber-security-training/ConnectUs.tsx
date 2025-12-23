import Image from "next/image";

export default function ConnectUs() {
    return (
        <div className="relative w-full flex items-center justify-center py-48 overflow-hidden">

            <div className=" w-[80%] flex gap-16">

                <div className=" w-[60%] flex flex-col gap-8 ">
                    <h1 className="text-[40px] font-normal leading-tight tracking-tight" >
                        Connect With Us
                    </h1>

                    <p className="text-gray-400 text-sm font-light leading-relaxed " >
                        Your digital safety is our priority. Whether you're looking for answers, want to share feedback, <br /> or need help securing your accounts, we're here for you.
                    </p>

                    <Image src="/data-protection/connectus-security.png" alt="Cloud Security - Secure data protection" width={500} height={500} className="w-full h-full object-cover" />
                </div>


                <div className="relative bg-linear-to-br flex-1 from-[#1a0f2e]/60 to-[#0f0820]/60 
                              backdrop-blur-xl
                              border border-purple-500/30
                              rounded-3xl p-8 md:p-10
                              shadow-[0_0_60px_rgba(147,51,234,0.15)]">

                    <form className="space-y-6 flex flex-col gap-6">
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-6 py-4 
                                         bg-[#0B0118]/50 
                                         border border-purple-500/30
                                         rounded-xl
                                         text-white placeholder-gray-500
                                         focus:outline-none focus:border-purple-400/50
                                         backdrop-blur-sm"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-6 py-4 
                                         bg-[#0B0118]/50 
                                         border border-purple-500/30
                                         rounded-xl
                                         text-white placeholder-gray-500
                                         focus:outline-none focus:border-purple-400/50
                                         backdrop-blur-sm"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-6 py-4 
                                         bg-[#0B0118]/50 
                                         border border-purple-500/30
                                         rounded-xl
                                         text-white placeholder-gray-500
                                         focus:outline-none focus:border-purple-400/50
                                         backdrop-blur-sm"
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-6 py-4 
                                         bg-[#0B0118]/50 
                                         border border-purple-500/30
                                         rounded-xl
                                         text-white placeholder-gray-500
                                         focus:outline-none focus:border-purple-400/50
                                         backdrop-blur-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 
                                     bg-linear-to-r from-[#7c3aed] via-[#6d28d9] to-[#5b21b6] 
                                     rounded-full text-lg font-semibold 
                                     border border-purple-400/30 
                                     shadow-[0_0_30px_rgba(124,58,237,0.5)]
                                     text-white hover:cursor-pointer">
                            Submit
                        </button>


                    </form>


                </div>


            </div>
        </div>
    )
}