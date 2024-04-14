import { Locale } from "@/config"
import { Career, Contact } from "@/models"

export type Revalidate = {
  cache: 'no-cache' | 'force-cache',
  revalidate: number
}

type BaseApiMethodsProps = {
  cache?: 'no-cache' | 'force-cache',
  lang?: Locale
}

export interface Api {
  getContact(props?: BaseApiMethodsProps): Promise<Contact>
  getCareer(props?: BaseApiMethodsProps): Promise<Career>
}
