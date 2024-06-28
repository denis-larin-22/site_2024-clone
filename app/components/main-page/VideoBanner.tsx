import { CircleDecoreIcon } from "../assets/icons";

export default function VideoBanner() {
    return (
        <div className="group relative z-10 max-w-[1242px] h-[624px] mx-auto">
            <div className="absolute -top-[15%] right-16">
                <CircleDecoreIcon
                    height={190}
                    width={190}
                    className="group-hover:-rotate-90 duration-500"
                />
                <svg width="43" height="70" viewBox="0 0 43 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto group-hover:rotate-45 duration-500">
                    <path d="M21.0055 1.1709L21.0058 68.8365M21.0058 68.8365L41.0903 48.6709M21.0058 68.8365L1.09033 48.6709" stroke="#F6F5F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <iframe
                src="https://www.youtube.com/embed/SI6bm2hAsH0?autoplay=1&mute=1&controls=0&loop=1&playlist=SI6bm2hAsH0&showinfo=0&disablekb=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Embedded Video"
                className="w-full h-full rounded-[40px]"
            ></iframe>
        </div>
    )
}