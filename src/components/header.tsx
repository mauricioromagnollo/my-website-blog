import { twMerge } from 'tailwind-merge'

import { LocaleSwitcher, ThemeSwitcher, Logo } from '@/components'
import { Container } from '@/ui'
import { Locale } from '@/config'

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
      <Container className='flex items-center justify-between'>
        <Logo />

        {/* <Nav /> */}

        <div className='flex items-center gap-2'>
          <ThemeSwitcher />
          <LocaleSwitcher lang={lang} />
        </div>
      </Container>
    </header>
  )
}
