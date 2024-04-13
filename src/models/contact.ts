export type Contact = {
  email: string
  phone: string
  socials: Social[]
}

type Social = {
  name: 'github' | 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube'
  url: string
}
