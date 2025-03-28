"use client"

import { Link, usePathname, useRouter } from "@/i18n/routing"
import { Earth, ChevronDown } from "lucide-react"
import { useTranslations, useLocale } from "next-intl";
import MobileMenu from "./MobileMenu";
import { useState, useRef, useEffect } from "react";

function Menu() {
  const t = useTranslations('Menu');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  // Specify the type for the ref
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'gr', name: 'Greek' }
  ];

  // Define the type for locale
  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
    setIsLangMenuOpen(false);
  };

  // Fermer le menu si on clique ailleurs
  // Add type for the event parameter
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="shadow-2xl flex w-screen px-2 lg:px-7 bg-nail-special2 text-white h-full justify-around items-center font-josefin-sans font-light tracking-[0.15rem] text-xs ">
      {/* ---------------------- MOBILE ----------------------------- */}
      <MobileMenu />
      {/* --------------------- DESKTOP ------------------------------ */}
      <div className="1/5 lg:w-2/5 h-full hidden lg:block ">
        <ul className="flex space-x-6 h-full items-center ">
          <li><Link href={"/"}>{t('home')}</Link></li>
          <li><Link href={"https://www.instagram.com/se_nailstudio"}>{t('bookNow')}</Link></li>
          <li><Link href={"/gallery"}>{t('gallery')}</Link></li>
          <li><Link href={"/about-us"}>{t('aboutUs')}</Link></li>
        </ul>
      </div>
      <div className="w-3/5 lg:w-1/5 flex justify-center items-center ">
        <div className="font-josefin-sans text-center text-white text-xs md:text-sm font-medium tracking-[0.3rem] md:tracking-[0.5rem]">SE NAIL STUDIO</div>
      </div>
      <div className=" 1/5 lg:w-2/5 flex font-josefin-sans font-light text-sm justify-end items-center ">
        <div className="relative" ref={langMenuRef}>
          <button
            className=" cursor-pointer flex items-center space-x-1 md:space-x-2"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <Earth strokeWidth={0.5} className="size-5" />
            <span className="hidden md:block">{currentLocale === 'en' ? 'English' : 'Greek'}</span>
            <span className=" md:hidden">{currentLocale === 'en' ? 'En' : 'Gr'}</span>

            <ChevronDown strokeWidth={1} size={16} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangMenuOpen && (
            <ul className="absolute top-full right-0 mt-2 bg-nail-special2 shadow-lg rounded-md py-1 z-10 min-w-24">
              {languages.map((language) => (
                <li
                  key={language.code}
                  className={`px-4 py-2 hover:bg-pink-900 cursor-pointer ${currentLocale === language.code ? 'font-medium' : ''}`}
                  onClick={() => handleLanguageChange(language.code)}
                >
                  {language.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;