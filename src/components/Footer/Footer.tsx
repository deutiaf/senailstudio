import { Mail, MapPin, Phone } from "lucide-react";
import BusinessHours from "../Common/BusinessHours";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

function Footer() {
    const t = useTranslations('Footer');  // Utilisation de useTranslations pour charger les traductions du Footer

    return (
        <footer className="bg-nail-850 relative  ">
            <div className="  w-screen max-w-[1700px] mx-auto pl-10 lg:pl-0 flex flex-col-reverse lg:flex-row pt-[340px] md:pt-[720px] lg:pt-0 px-3 md:px-28 lg:px-0 space-y-14 lg:space-y-0">
                <div className="lg:w-4/12 lg:pt-14">
                    <div className="w-10/12 md:w-7/12 lg:w-11/12 xl:w-8/12 lg:mx-auto">
                        <BusinessHours headerBgColor="bg-nail-850" regularTextColor="text-neutral-300" />
                    </div>
                </div>

                <div className="bg-nail-850 w-11/12 md:w-9/12 mx-auto lg:mx-5 mb-0 lg:w-4/12 aspect-square rounded-full absolute lg:relative -top-14 lg:-top-32 left-0 right-0 lg:bottom-24">
                    <div className="rounded-full bg-white size-full border-nail-850 border-4 pt-12">
                        <div className="h-full flex flex-col justify-center items-center ">
                            <h2 className="px-2 xl:px-0 font-cinzel text-nail-850 tracking-tighter text-2xl md:text-3xl lg:text-xl xl:text-2xl pt-3 lg:pt-2 xl:pt-3 font-medium w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/5 mx-auto leading-7 md:leading-10 lg:leading-6 xl:leading-8 text-center">
                                {t('joinCommunityTitle')} {/* Texte traduit */}
                            </h2>
                            <p className="font-inter text-xs md:text-lg lg:text-xs xl:text-sm tracking-wider font-medium md:w-4/5 lg:w-11/12 xl:w-4/5 mx-auto leading-5 md:leading-6 lg:leading-4 xl:leading-6 px-7 lg:px-0 xl:px-7 text-center text-zinc-500 italic mt-3">
                                {t('joinCommunityDescription')} {/* Texte traduit */}
                            </p>
                            <form action="" className="w-full flex flex-col items-center pt-5 md:pt-9 lg:pt-4 xl:pt-5">
                                <input type="email" name="" placeholder={t('emailPlaceholder')} id="" className="border border-nail-950 w-3/5 md:w-4/5 lg:w-3/5 xl:w-4/5 px-3 py-2 md:p-5 lg:p-2 xl:p-3 bg-white rounded-full" />
                                <button type="submit" className="text-xs rounded-full mt-2 md:mt-5 lg:mt-2 xl:mt-5 px-4 py-2 md:px-11 lg:px-8 md:py-5 lg:py-2 xl:py-3 border border-nail-50 cursor-pointer hover:bg-white hover:border-nail-special2 bg-nail-special2 hover:text-nail-special2 text-nail-50">
                                    {t('joinButton')} {/* Texte traduit */}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/12 text-neutral-300 pt-14 space-y-5">
                    <h3 className="text-white text-xl md:text-2xl font-medium">{t('aboutTitle')}</h3>

                    <ul className="space-y-2 md:text-xl lg:text-sm lg:space-y-4 font-josefin-sans">
                        <li>
                            <Link href="/" className="hover:text-nail-special2 duration-200 cursor-pointer">
                                {t('home')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:text-nail-special2 duration-200 cursor-pointer">
                                {t('aboutUs')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-nail-special2 duration-200 cursor-pointer">
                                {t('services')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/#faq" className="hover:text-nail-special2 duration-200 cursor-pointer">
                                {t('faq')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-nail-special2 duration-200 cursor-pointer">
                                {t('gallery')}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-2/12 text-neutral-300 flex lg:justify-end  mt-10 md:mt-0">
                    <div className="lg:pt-14 flex flex-col space-y-5">
                        <h3 className="text-white text-xl md:text-2xl font-medium text-left">{t('infoTitle')}</h3>
                        <ul className="space-y-3 lg:space-y-6 font-josefin-sans md:text-xl lg:text-sm">
                            <li className="flex space-x-3 items-center cursor-pointer">
                                <Link href="tel:99928155" className="flex space-x-3 items-center hover:text-nail-special2 duration-200">
                                    <Phone className="size-4" />
                                    <span>99 92 81 55</span>
                                </Link>
                            </li>
                            <li className="flex space-x-3 items-center">
                                <Link href="mailto:eirini.stevenson9619@yahoo.com" className="hover:text-nail-special2 duration-200 flex space-x-3 items-center cursor-pointer">
                                    <Mail className="size-4" />
                                    <span>eirini.stevenson9619@yahoo.com</span>
                                </Link>
                            </li>
                            <li className="flex space-x-3">
                                <span className="cursor-pointer">
                                    <Link className="hover:text-nail-special2 duration-200 flex space-x-3 items-center cursor-pointer" href={"https://www.google.com/maps/place/SE+Nail+Studio/@35.1794932,33.3231211,17z/data=!3m1!4b1!4m6!3m5!1s0x14de11000dc5fc5b:0xbc6e4bcd54c46be1!8m2!3d35.1794932!4d33.3231211!16s%2Fg%2F11y8tz1pnz?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"}>
                                        <MapPin className="size-5" />
                                        <span>{t('address')}</span>
                                    </Link>
                                </span>
                            </li>
                            <li className="flex space-x-5 items-center">
                                <div className="text-nail-850 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer">
                                    <Link href={"https://www.facebook.com/people/SENailStudio/61556082533133/"} target="_blank">
                                        <span className="m-auto h-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 50 50">
                                                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" fill="#edeae6" stroke="" strokeWidth="2"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>

                                <div className="size-10 text-nail-850 rounded-full bg-nail-50 flex hover:scale-125 transition-transform duration-300 cursor-pointer">
                                    <Link href={"https://www.instagram.com/se_nailstudio"} target="_blank" className="m-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" className="m-auto" viewBox="0 0 50 50">
                                            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" fill="#2d2d2d"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-nail p-4 font-josefin-sans">
                <small>
                    <a href="https://www.flaticon.com/free-icons/certificate" title="certificate icons">Certificate icons created by Freepik - Flaticon</a>
                </small>
            </div>

            <div className="text-neutral-400 text-xs md:text-sm pt-6 pb-14 border-t border-zinc-500 w-10/12 mx-auto font-josefin-sans">
                <p>© SE Nail Studio {t('allRightsReserved')}</p> {/* Texte traduit */}
            </div>
        </footer>
    );
}

export default Footer;
