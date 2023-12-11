import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: twMerge(
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80'
  ),
  variants: {
    variant: {
      primary: twMerge(
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500',
        'dark:hover:bg-violet-600'
      ),
      ghost: twMerge(
        'rounded-md px-2 hover:bg-zinc-50 dark:hover:bg-white/5 shadow-none text-zinc-500',
        'dark:text-zinc-400'
      ),
      outline: twMerge(
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700',
        'dark:text-zinc-400 dark:hover:bg-zinc-800'
      )
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
