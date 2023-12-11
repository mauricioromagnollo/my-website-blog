import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

const baseHeader = 'font-mono font-extrabold text-background-dark dark:text-background-light'

const text = tv({
  base: 'text-sm md:text-base text-gray-dark dark:text-gray-light',
  variants: {
    variant: {
      h1: `${baseHeader} text-2xl md:text-3xl`,
      h2: `${baseHeader} text-xl md:text-2xl`,
      h3: `${baseHeader} text-lg md:text-xl`,
      h4: `${baseHeader} md:text-lg`,
      paragraph: 'font-sans text-justify',
    }
  },
  defaultVariants: {
    variant: 'paragraph',
  }
})

type TextProps = ComponentProps<'h1'> & VariantProps<typeof text>

export function Text({ variant, className, ...props }: TextProps) {

  if (variant === 'h1') {
    return <h1 {...props} className={twMerge(text({ variant }), className)} />
  }

  if (variant === 'h2') {
    return <h2 {...props} className={twMerge(text({ variant }), className)} />
  }

  if (variant === 'h3') {
    return <h3 {...props} className={twMerge(text({ variant }), className)} />
  }

  if (variant === 'h4') {
    return <h4 {...props} className={twMerge(text({ variant }), className)} />
  }

  return <p {...props} className={twMerge(text({ variant }), className)} />
}
