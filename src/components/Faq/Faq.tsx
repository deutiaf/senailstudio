import { ChevronRight } from "lucide-react"
import { useTranslations } from 'next-intl'

function Faq() {
  // Tableau de données pour les FAQ avec des clés pour les traductions
  const faqData = [
    {
      id: "manicure-definition",
      questionKey: "faq.manicureDefinition",
      answerKey: "faq.manicureDefinitionAnswer"
    },
    {
      id: "types-of-polish",
      questionKey: "faq.typesOfPolish",
      answerKey: "faq.typesOfPolishAnswer"
    },
    {
      id: "pedicure-for-sensitive-feet",
      questionKey: "faq.pedicureForSensitiveFeet",
      answerKey: "faq.pedicureForSensitiveFeetAnswer"
    },
    {
      id: "manicure-duration",
      questionKey: "faq.manicureDuration",
      answerKey: "faq.manicureDurationAnswer"
    },
    {
      id: "nail-strengthening-treatments",
      questionKey: "faq.nailStrengtheningTreatments",
      answerKey: "faq.nailStrengtheningTreatmentsAnswer"
    },
    {
      id: "manicure-for-damaged-nails",
      questionKey: "faq.manicureForDamagedNails",
      answerKey: "faq.manicureForDamagedNailsAnswer"
    },
    {
      id: "nail-extensions",
      questionKey: "faq.nailExtensions",
      answerKey: "faq.nailExtensionsAnswer"
    },
    {
      id: "hypoallergenic-products",
      questionKey: "faq.hypoallergenicProducts",
      answerKey: "faq.hypoallergenicProductsAnswer"
    },
    {
      id: "manicure-during-pregnancy",
      questionKey: "faq.manicureDuringPregnancy",
      answerKey: "faq.manicureDuringPregnancyAnswer"
    },
    {
      id: "custom-nail-designs",
      questionKey: "faq.customNailDesigns",
      answerKey: "faq.customNailDesignsAnswer"
    },
    {
      id: "manicure-session-time",
      questionKey: "faq.manicureSessionTime",
      answerKey: "faq.manicureSessionTimeAnswer"
    }
  ];

  const t = useTranslations('Faq'); // Charger les traductions spécifiques à la FAQ

  return (
    <section id="faq" className='mb-16 w-screen py-10 md:py-20 h-fit font-poppins font-normal word-spacing tracking-wide text-sm leading-7 text-pretty text-zinc-600'>
      <h1 className='font-bold font-cinzel text-center text-2xl md:text-3xl lg:text-7xl text-zinc-700 my-4 lg:my-12'>
        {t('title')}
      </h1>
      <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto flex flex-col justify-center items-center'>
        {faqData.map((item) => (
          <div id={`item-${item.id}`} key={item.id} className='flex flex-col w-full shrink-0'>
            <label htmlFor={item.id} className='w-full overflow-hidden relative'>
              <input type="radio" name="faq" id={item.id} className='peer hidden' />
              <h2 className='cursor-pointer font-medium font-cinzel text-zinc-800 pr-2 py-6 text-lg tracking-normal border-b-[1px] w-11/12 border-b-zinc-300 peer-checked:text-nail-special2 px-2 peer-checked:border-b-0'>
                {t(item.questionKey)}
              </h2>
              <ChevronRight className='size-4 lg:size-6 peer-checked:rotate-90 transition-transform ease-out absolute inset-y-0 right-0 mr-2 mt-4' />
              <div className='peer-checked:h-48 md:peer-checked:h-32 peer-checked:opacity-100 h-0 opacity-0 overflow-hidden transition-all duration-500 w-11/12 origin-bottom'>
                <p className='px-4 border-b-[1px] border-b-zinc-300 pt-2 pb-9 mb-6'>
                  {t(item.answerKey)}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
