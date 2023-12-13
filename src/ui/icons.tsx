import {
  Github,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Sun,
  Moon,
  Construction
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type IconProps = {
  className?: string
}

const BASE_ICONS_CLASSNAME = 'w-5 h-5 dark:text-primary-light text-background-dark'

export const ConstructionIcon = ({ className }: IconProps) => (
  <Construction
    data-testid='construction-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const GithubIcon = ({ className }: IconProps) => (
  <Github
    data-testid='github-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const YoutubeIcon = ({ className }: IconProps) => (
  <Youtube
    data-testid='youtube-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const LinkedinIcon = ({ className }: IconProps) => (
  <Linkedin
    data-testid='linkedin-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const TwitterIcon = ({ className }: IconProps) => (
  <Twitter
    data-testid='twitter-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const InstagramIcon = ({ className }: IconProps) => (
  <Instagram
    data-testid='instagram-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const LightThemeIcon = ({ className }: IconProps) => (
  <Sun
    data-testid='light-theme-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)

export const DarkThemeIcon = ({ className }: IconProps) => (
  <Moon
    data-testid='dark-theme-icon'
    className={twMerge(BASE_ICONS_CLASSNAME, className)}
  />
)
