import * as prismic from '@prismicio/client'

import { Contact } from "@/domain"
import { Api, Revalidate } from "@/service/contracts/api"


export class PrismicApi implements Api {
  constructor() {}

  async getContact(revalidate?: Revalidate): Promise<Contact> {
    const accessToken = process.env.PRISMIC_API_TOKEN
    const repository = process.env.PRISMIC_REPOSITORY || ''

    const client = prismic.createClient(repository, {
      accessToken,
      fetchOptions: { cache: revalidate?.cache || 'force-cache' },
    });

    const contact = await client.getByTag('contact')
    const data = contact.results[0].data

    return {
      email: data.email,
      phone: data.phone,
      socials: data.socials
    }
  }
}
