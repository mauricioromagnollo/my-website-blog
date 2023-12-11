import { Contact } from "@/domain"

export type Revalidate = {
  cache: 'no-cache' | 'force-cache',
  revalidate: number
}

export interface Api {
  getContact(revalidate?: Revalidate): Promise<Contact>
}
