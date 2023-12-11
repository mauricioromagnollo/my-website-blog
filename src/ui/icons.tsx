import { Github, Youtube, Linkedin, Twitter, Instagram, Sun, Moon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type IconProps = {
  className?: string
}

const BASE_ICONS_CLASSNAME = 'w-5 h-5 dark:text-primary-light text-background-dark'

export const GithubIcon = ({ className }: IconProps) => (
  <Github
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const YoutubeIcon = ({ className }: IconProps) => (
  <Youtube
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const LinkedinIcon = ({ className }: IconProps) => (
  <Linkedin
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const TwitterIcon = ({ className }: IconProps) => (
  <Twitter
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const InstagramIcon = ({ className }: IconProps) => (
  <Instagram
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const LightThemeIcon = ({ className }: IconProps) => (
  <Sun className={twMerge(BASE_ICONS_CLASSNAME, className)} />
)

export const DarkThemeIcon = ({ className }: IconProps) => (
  <Moon className={twMerge(BASE_ICONS_CLASSNAME, className)} />
)
