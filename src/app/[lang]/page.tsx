import { twMerge } from "tailwind-merge"
import Image from "next/image"

import { PageUnderConstruction } from "@/components"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib"

import { PrismicApi } from "@/service"
import { SocialButton, Text } from "@/ui"

type HomeProps = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: HomeProps) {
  const dictionary = await getDictionary(lang)

  const api = new PrismicApi()
  const contact = await api.getContact()

  return (
    <section className="flex items-center justify-center flex-col mt-4 px-4 md:px-0">
      <div className="max-w-container">

        <div className={twMerge(
          "p-4 rounded-lg shadow-md",
          'dark:border dark:border-primary-light',
          'dark:shadow-none'
        )}>
          <Text
            variant="h2"
            className="text-center text-lg"
          >
            {dictionary.home.hello}
          </Text>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 mt-8">
          <div>
            <Text variant="h1">Maurício Romagnollo</Text>
            <Text variant="h4">SOFTWARE ENGINEER</Text>
            <Text className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro eos adipisci neque iure culpa, numquam ducimus architecto corrupti ipsa eius, odio minus ex? Voluptatum eveniet numquam excepturi animi ratione.
            </Text>
          </div>

          <Image
            src="https://github.com/mauricioromagnollo.png"
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-full w-36 border-2 border-primary-dark dark:border-primary-light shadow-sm"
          />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {
            contact.socials.map((social, index) => (
              <SocialButton key={index} name={social.name} url={social.url} />
            ))
          }
        </div>

        <Text>{contact.email}</Text>
        <Text>{contact.phone}</Text>
      </div>

      <PageUnderConstruction
        message={dictionary.under_construction_message}
      />
    </section>
  )
}
