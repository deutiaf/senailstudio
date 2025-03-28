import img1 from '@/../public/images/annie-spratt-MUVKrHNMvoQ-unsplash.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Booknow() {
    const t = useTranslations('BookNow');  // Utilisation de useTranslations pour charger les traductions

    return (
        <section className="w-screen relative font-josefin-sans">
            <div className='z-20 py-16  flex flex-col justify-center  w-4/6 md:w-3/5 lg:w-2/5 lg:top-1/6 space-y-2 md:space-y-5 text-white lg:leading-7 ml-auto mr-5'>
                <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold  leading-7 md:leading-10 lg:leading-16'>
                    {t('title')}  {/* Remplacer par la clé de traduction */}
                </h2>
                <p className='text-neutral-100 font-poppins tracking-wide word-spacing font-medium lg:font-normal md:text-lg leading-6 md:leading-7 text-[16px]'>
                    {t('description')}  {/* Remplacer par la clé de traduction */}
                </p>
                <Link href={"https://www.instagram.com/se_nailstudio"} className='w-fit border transition-colors duration-300 px-7 py-1 md:py-3 hover:bg-nail-special2 hover:text-nail-50 hover:border-nail-special2'>
                    {t('bookNowButton')}  {/* Remplacer par la clé de traduction */}
                </Link>
            </div>
            <div className="-z-10 absolute inset-0  w-full h-full bg-neutral-400  md:aspect-16-9 lg:aspect-2-39-1 overflow-hidden">
                <Image
                    src={img1}
                    alt={t('imageAlt')}
                    className='object-cover size-full object-bottom '


                />
            </div>
        </section>
    )
}

export default Booknow;
