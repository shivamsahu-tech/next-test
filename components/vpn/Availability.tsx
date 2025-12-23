export default function Availability() {
    return (
     <div className="relative rounded-lg overflow-hidden px-6 lg:px-30 mt-36 mb-30">
    <div className="relative grid-background grid-fade 
                    bg-[radial-gradient(circle_at_center,#0A011C_0%,#1a0d2e_50%,#360670_100%)] 
                    px-8 py-20 min-h-[628px] flex flex-col items-center justify-center">
        
        {/* The Grid Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{
                 backgroundImage: `linear-gradient(#945FFF 1px, transparent 1px), linear-gradient(90deg, #945FFF 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
                 maskImage: 'radial-gradient(circle, black, transparent 80%)'
             }}>
        </div>

        <div className="relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Access 50+ Countries Instantly
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base mb-8">
                We're proud to protect individuals and businesses around the world with our powerful, easy-to-use security solutions.
            </p>
            
                <button className="bg-[#481381] hover:bg-[#481381]/80 text-white font-medium px-30 py-4 rounded-full hover:cursor-pointer transition-all">
                    Contact Us
                </button>
        </div>
    </div>
</div>  
    )
}