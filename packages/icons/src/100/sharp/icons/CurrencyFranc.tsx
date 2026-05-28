import type { SVGProps, JSX } from 'react'

export default function CurrencyFranc({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-172v-123h-83v-22h83v-471h365v22H341v265h303v22H341v162h150v22H341v123h-22Z" />
    </svg>
  )
}
