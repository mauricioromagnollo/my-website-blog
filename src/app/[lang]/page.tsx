import { twMerge } from "tailwind-merge"
import Image from "next/image"

import { PageUnderConstruction } from "@/components"
import { Locale } from "@/config"
import { getDictionary } from "@/lib"

import { PrismicApi } from "@/service"
import { Container, SocialButton, Text } from "@/ui"
import { Months } from "@/constants"
import { formatCarrerHistory, getHowManyYearsHavePassed } from "@/helpers"

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

      <Container>
        <PageUnderConstruction
          message={dictionary.under_construction_message}
        />

        <div className={twMerge(
          'flex flex-col-reverse items-center justify-center mt-4',
          'md:mt-8 md:gap-10 md:justify-between md:flex-row'
        )}>
          <div className="text-center md:text-left">
            <Text variant="h1">Maurício Romagnollo</Text>
            <Text variant="h2" className="text-accent-light dark:text-primary-light mt-1">
              {career.currentPosition}
            </Text>
            <Text variant="h4" className="text-primary-dark dark:text-accent-light mt-1">
              {getHowManyYearsHavePassed(new Date(1994, Months.December, 14))} {dictionary.words.year}s
            </Text>

            <Text className="mt-4">
              {formatCarrerHistory(career.history, dictionary, lang)}
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
