import { twMerge } from "tailwind-merge"
import Image from "next/image"

import { PageUnderConstruction } from "@/components"
import { Locale } from "@/config"
import { getDictionary } from "@/lib"

import { PrismicApi } from "@/service"
import { SocialButton, Text } from "@/ui"
import { getHowManyYearsHavePassed } from "@/helpers"
import { Months } from "@/constants"

type HomeProps = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: HomeProps) {
  const dictionary = await getDictionary(lang)

  const api = new PrismicApi()

  const contact = await api.getContact({ lang })
  const career = await api.getCareer({ lang })

  return (
    <main className="flex items-center justify-center flex-col mt-4 px-4 md:px-0">
      <PageUnderConstruction
        message={dictionary.under_construction_message}
      />

      <div className="max-w-container w-full">

        <div className={twMerge(
          "p-2 rounded-lg shadow-md",
          'dark:border dark:border-primary-light',
          'dark:shadow-none'
        )}>
          <Text
            variant="h2"
            className="text-center text-md md:text-lg"
          >
            {dictionary.home.hello}
          </Text>
        </div>

        <div className={twMerge(
          'flex flex-col-reverse items-center justify-center mt-4',
          'md:mt-8 md:gap-10 md:justify-between md:flex-row'
        )}>
          <div className="text-center md:text-left">
            <Text variant="h1">Maurício Romagnollo</Text>
            <Text variant="h4" className="dark:text-primary-light mt-1">
              {career.currentPosition}
            </Text>
            <Text className="text-center md:text-left">
              {`${getHowManyYearsHavePassed(new Date(2021, Months.May, 1))} ${dictionary.home.years_of_experience}`}
            </Text>
            <Text className="mt-4">
              {career.history}
            </Text>
          </div>

          <Image
            src="https://github.com/mauricioromagnollo.png"
            alt="Profile Image"
            width={200}
            height={200}
            className={twMerge(
              "rounded-full w-36 border-2 border-primary-dark shadow-sm",
              'md:w-48',
              'dark:border dark:border-primary-light',
            )}
          />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {
            contact.socials.map((social, index) => (
              <SocialButton key={index} name={social.name} url={social.url} />
            ))
          }
        </div>

        <Text className="flex justify-center mt-4">{contact.email}</Text>
      </div>
    </main>
  )
}
