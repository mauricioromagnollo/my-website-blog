import { ConstructionIcon, Text } from "@/ui"
import { twMerge } from "tailwind-merge"

type PageUnderConstructionProps = {
  message: string
}

export function PageUnderConstruction({ message }: PageUnderConstructionProps) {
  return (
    <div className={twMerge(
      "rounded-lg shadow-md border border-accent-dark/30",
      'dark:border dark:border-primary-light',
      'dark:shadow-none'
    )}>
      <div className="flex items-center justify-center gap-4 my-2">
        <ConstructionIcon />
        <Text variant="h4">{message}</Text>
      </div>
    </div>
  )
}
