import type { SVGProps, JSX } from 'react'

export default function TornadoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M14-855h932L826-647H134L14-855Zm175 302h583l-61 106H249l-60-106Zm116 200h350L480-50 305-353Z" />
    </svg>
  )
}
