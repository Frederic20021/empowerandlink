import { AiFillInstagram } from "react-icons/ai";

export default function YoutubeSection() {
    return (
        <div className="py-6 sm:py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">
                        紹介動画
                    </h2>
                    
                    <a
                        href="https://www.instagram.com/shukatsu_hamamatsu/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="text-black hover:text-pink-600 transition-colors animate-bounce"
                    >
                        <AiFillInstagram className="h-7 w-7 sm:h-8 sm:w-8" />
                    </a>
                    
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        {/* Embedded YouTube Video */}
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/TvR8DCBHiVM"
                            title="Company Introduction Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}