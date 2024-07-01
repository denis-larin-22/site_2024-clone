import { FacebookIcon, InstagramIcon, TelegramIcon } from "../assets/icons";
import { openSansFont } from "./fonts";

export default function Footer() {
    return (
        <footer className="max-w-[1354px] mx-auto px-[57px] py-5 border-t-1 border-[#A2A2A8] flex items-center justify-between">
            <p className={`${openSansFont.className} text-[#A2A2A8]`}>© 2024 ТПК Піраміда</p>
            <ul className="flex gap-x-3">
                <li><a href="https://t.me/pirservice_bot" target="_blank">
                    <TelegramIcon />
                </a></li>
                <li><a href="https://www.instagram.com/piramid.com.ua/" target="_blank">
                    <InstagramIcon />
                </a></li>
                <li><a href="https://www.facebook.com/piramidjalusi/" target="_blank">
                    <FacebookIcon />
                </a></li>
            </ul>
        </footer>
    )
}