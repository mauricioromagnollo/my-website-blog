import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { LocaleSwitcher, ThemeSwitcher } from '@/components'
import { Text } from '@/ui'
import { Locale } from '@/config'

function Logo() {
  return (
    <Link href='/'>
      <div className='text-background-light'>
        <Text
          variant='h1'
          className='md:hidden text-background-light'
        >
          {'<MR />'}
        </Text>
        <Text
          variant='h1'
          className='hidden md:block text-background-light'
        >
          {'<MR />'}
        </Text>
      </div>
    </Link>
  )
}

type HeaderProps = {
  lang?: Locale
}

export function Header({ lang }: HeaderProps) {
  return (
    <header className={twMerge(
      'flex items-center justify-center h-16 px-4',
      'bg-background-dark dark:bg-primary-dark',
      'md:px-0',
    )}>
      <div className="flex items-center justify-between w-full max-w-container">
        <Logo />

        {/* <Nav /> */}

        <div className='flex items-center gap-2'>
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
