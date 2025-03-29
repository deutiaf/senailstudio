import BusinessHours from '../Common/BusinessHours'
import Image from 'next/image'
import img1 from '@/../public/images/ezgi-deliklitas-FEIK7lPmKqw-unsplash.jpg'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Boutique() {
    const t = useTranslations('Boutique'); // Charger les traductions spécifiques à Boutique

    return (
        <section className='w-screen md:py-16 '>
            <div className=' max-w-[1700px] w-full px-5 lg:px-0 lg:w-5/6 xl:w-3/4 mx-auto'>

                <div className='  flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-5 lg:space-x-16  md:border-none  md:pt-0'>

                    <div className=" flex  flex-col  items-center md:items-start  w-full md:w-1/2  space-y-9 lg:space-y-5">
                        <h2 className='text-xl text-center lg:text-left lg:text-3xl text-nowrap font-poppins leading-8 lg:leading-10 tracking-wide md:tracking-widest word-spacing-big font-semibold text-neutral-800'>
                            {t('title')} <br /> {t('title2')}
                        </h2>

                        <p className='text-sm text-center md:text-left font-poppins tracking-wider leading-6 md:leading-7 text-neutral-600 word-spacing font-medium'>
                            {t('description')}
                        </p>
                        <div className='w-4/5 lg:w-3/5'>
                            <BusinessHours headerBgColor='bg-white' currentDayTextColor='text-green-600' />
                        </div>
                        <div className='pt-6 w-fit'>
                            <ul className="flex space-x-3 font-josefin-sans md:text-xl lg:text-sm w-fit">
                                <li className="flex space-x-3 items-center cursor-pointer">
                                    <Link href="tel:99928155" className="flex space-x-3 items-center">
                                        <Phone className="size-7" strokeWidth={1} />
                                    </Link>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <a href="mailto:eirini.stevenson9619@yahoo.com" className="flex space-x-3 items-center cursor-pointer">
                                        <Mail className="size-7" strokeWidth={1} />
                                    </a>
                                </li>
                                <li className="flex space-x-3 hover:text-nail-special2 items-start">
                                    <MapPin className="size-7" strokeWidth={1} />
                                    <span className="">
                                        <Link href={"https://www.google.com/maps/place/SE+Nail+Studio/@35.1794932,33.3231211,17z/data=!3m1!4b1!4m6!3m5!1s0x14de11000dc5fc5b:0xbc6e4bcd54c46be1!8m2!3d35.1794932!4d33.3231211!16s%2Fg%2F11y8tz1pnz?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"}></Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mt-5 md:mt-0 md:w-1/2 h-full relative overflow-hidden rounded-t-full">
                        <Image alt={t('imageAlt')} src={img1} className='object-cover size-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Boutique
