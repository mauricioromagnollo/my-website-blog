import { twMerge } from "tailwind-merge"
import Image from "next/image"

import { PageUnderConstruction } from "@/components"
import { Locale } from "@/config"
import { getDictionary } from "@/lib"

import { PrismicApi } from "@/service"
import { Container, SocialButton, Text } from "@/ui"
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

  const yearsOfExperience = getHowManyYearsHavePassed(new Date(2021, Months.May, 1))

  return (
    <main className="flex items-center justify-center flex-col mt-4 px-4 md:px-0">
      <PageUnderConstruction
        message={dictionary.under_construction_message}
      />

      <Container>
        <div className={twMerge(
          "p-2 rounded-lg shadow-md border border-accent-dark/30",
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
            <Text variant="h4" className="text-accent-light dark:text-primary-light mt-1">
              {career.currentPosition} - {yearsOfExperience}y
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
              "rounded-full w-36 border-4 border-background-dark shadow-md",
              'sm:w-48',
              'md:w-52',
              'dark:border-4 dark:border-primary-light',
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
      </Container>
    </main>
  )
}
