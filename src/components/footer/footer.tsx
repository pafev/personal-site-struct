import { Facebook, Instagram, Linkedin } from "lucide-react";
import CloudinaryImg from "../ui/cloudinaryImg";

export default function Footer() {
    return (
        <footer className="mt-40 md:mt-52 flex flex-col gap-y-10 sm:flex-row justify-around items-center py-10">
            <div className="flex gap-4">
                <Instagram />
                <Facebook />
                <Linkedin />
            </div>
            <div className="flex flex-col gap-4 items-center">
                <CloudinaryImg src="assinatura01_gmzv53" alt="assinatura-struct" width={300} height={40}/>
                <span>Copyright © 2023 | Created by Us</span>
            </div>
        </footer>
    )
}