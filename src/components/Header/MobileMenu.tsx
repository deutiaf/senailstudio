"use client";

import { Link } from "@/i18n/routing";
import { MenuIcon, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Effet pour fermer le menu quand la page change
    useEffect(() => {
        setIsOpen(false);
    }, []);

    // Bloque le scroll du body quand le menu est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Bloque le scroll
        } else {
            document.body.style.overflow = 'auto'; // Restaure le scroll
        }

        // Nettoyage de l'effet lors du démontage du composant
        return () => {
            document.body.style.overflow = 'auto'; // Assure que le scroll soit restauré si le composant est démonté
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const t = useTranslations('Menu');

    return (
        <div className="lg:hidden w-1/5">
            <button
                onClick={toggleMenu}
                className="bg-transparent border-0 p-0 flex items-center justify-center"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
                {isOpen ? (
                    <X strokeWidth={2} className="size-9 z-20" />
                ) : (
                    <MenuIcon strokeWidth={0.5} className="size-9" />
                )}
            </button>

            {/* Overlay */}
            <div className={`absolute opacity-0 z-10 top-0 left-0 w-screen h-screen bg-black transition-opacity duration-500  ${isOpen ? 'translate-x-0 opacity-80' : '-translate-x-full '}`}></div>

            {/* Menu panel */}
            <div className={`absolute z-10 top-0 left-0 w-5/6 h-screen bg-nail-special2 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="4/5 h-full mt-32">
                    <ul className="space-y-7 h-full px-5 text-lg font-light mt-8 pt-9 border-t-[0.5px] mx-3">
                        <li><Link href={"/"} onClick={() => setIsOpen(false)}>{t('home')}</Link></li>
                        <li><Link href={"https://www.instagram.com/se_nailstudio"} onClick={() => setIsOpen(false)}>{t('bookNow')}</Link></li>
                        <li><Link href={"/gallery"} onClick={() => setIsOpen(false)}>{t('gallery')}</Link></li>
                        <li><Link href={"/about-us"} onClick={() => setIsOpen(false)}>{t('aboutUs')}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
