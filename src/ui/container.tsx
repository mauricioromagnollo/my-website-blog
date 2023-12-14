import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div {...props} className={twMerge('w-full max-w-container px-2', className)}>
      {children}
    </div>
  )
}
