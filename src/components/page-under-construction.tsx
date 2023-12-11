type PageUnderConstructionProps = {
  message: string
}

export function PageUnderConstruction({ message }: PageUnderConstructionProps) {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}
