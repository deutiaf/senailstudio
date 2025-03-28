import { Link } from "@/i18n/routing"
import { Earth } from "lucide-react"
import { useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";

function Menu() {

  const t = useTranslations('Menu');



  return (
    <div className="shadow-2xl flex w-screen px-2 lg:px-7 bg-nail-special2 text-white h-full justify-around items-center font-josefin-sans font-light tracking-[0.15rem] text-xs  ">

      {/* ---------------------- MOBILE  ----------------------------- */}

      <MobileMenu />


      {/* --------------------- DESKOPT  ------------------------------ */}


      <div className="1/5 lg:w-2/5 h-full hidden lg:block ">
        <ul className="flex space-x-6 h-full items-center ">
          <li><Link href={"/"}>{t('home')} </Link></li>
          <li><Link href={"/"}>{t('bookNow')} </Link></li>
          <li><Link href={"/gallery"}>{t('gallery')}</Link></li>
          <li><Link href={"/about-us"}>{t('aboutUs')}</Link></li>
        </ul>
      </div>
      <div className="w-3/5 lg:w-1/5 flex justify-center items-center ">
        <div className="font-josefin-sans text-center  text-white text-xs md:text-sm font-medium tracking-[0.3rem] md:tracking-[0.5rem]">SE NAIL STUDIO</div>


      </div>
      <div className="1/5 lg:w-2/5 flex font-josefin-sans font-light text-sm space-x-2 justify-end items-center  ">
        <Earth strokeWidth={0.5} className="" />
        <span className="">english</span>
      </div>





    </div>
  )
}

export default Menu