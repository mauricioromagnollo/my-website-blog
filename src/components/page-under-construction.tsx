import { ConstructionIcon, Text } from "@/ui"

type PageUnderConstructionProps = {
  message: string
}

export function PageUnderConstruction({ message }: PageUnderConstructionProps) {
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <ConstructionIcon />
      <Text variant="h4">{message}</Text>
    </div>
  )
}
