import * as prismic from '@prismicio/client'

import { Career, Contact } from "@/models"
import { Api } from "@/service/contracts/api"
import { Locale } from '@/config'

type BaseApiMethodsProps = {
  cache?: 'no-cache' | 'force-cache',
  lang?: Locale
}

export class PrismicApi implements Api {
  constructor() { }

  async getContact({ cache, lang }: BaseApiMethodsProps): Promise<Contact> {
    const client = this.makeClient(cache)

    const contact = await client.getByTag('contact', {
      lang: lang || 'en-US'
    })
    const data = contact.results[0].data

    return {
      email: data.email,
      phone: data.phone,
      socials: data.socials
    }
  }

  async getCareer({ cache, lang }: BaseApiMethodsProps): Promise<Career> {
    const client = this.makeClient(cache)

    const career = await client.getByType('career', {
      lang: lang || 'en-US'
    })
    const data = career.results[0].data

    return {
      currentPosition: data.current_position,
      history: data.history,
    }
  }

  /**
   * Private methods
   */
  private makeClient(cache?: 'no-cache' | 'force-cache') {
    const accessToken = process.env.PRISMIC_API_TOKEN
    const repository = process.env.PRISMIC_REPOSITORY || ''

    return prismic.createClient(repository, {
      accessToken,
      fetchOptions: { cache: cache || 'no-cache' },
    });
  }
}
