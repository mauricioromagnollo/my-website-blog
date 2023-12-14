import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Text } from '@/ui'

export function Logo() {
  return (
    <Link href='/' className='group'>
      <Text
        variant='h1'
        className={twMerge(
          'text-background-light',
          'group-hover:text-primary-light dark:group-hover:text-background-dark'
        )}
      >
        {'<MR />'}
      </Text>
    </Link>
  )
}
