import React from 'react';
import { twMerge } from 'tailwind-merge'
import { GithubIcon, YoutubeIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './icons';

type SocialButtonProps = {
  name: string
  url: string
}

const IconMap = new Map([
  ['github', GithubIcon],
  ['youtube', YoutubeIcon],
  ['linkedin', LinkedinIcon],
  ['twitter', TwitterIcon],
  ['instagram', InstagramIcon],
])

export const SocialButton = ({ name, url }: SocialButtonProps) => {
  const Icon = IconMap.get(name)

  return (
    <a
      href={url}
      target='_blank'
      className={twMerge(
        'group flex items-center justify-center h-14 w-14 rounded-lg',
        'border shadow-md border-background-dark/30 bg-transparent',
        'dark:border-primary-light dark:shadow-sm dark:shadow-primary-light/20',
        'hover:bg-primary-dark hover:border-primary-light hover:border-2',
        'dark:hover:shadow-none dark:hover:bg-primary-dark',
        'transition duration-300 ease-in-out'
      )}
    >
      {Icon && <Icon className='group-hover:text-primary-light' />}
    </a>
  )
}
