import type { SVGProps, JSX } from 'react'

export default function ArrowOutwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M246.52-231.87 190.39-288l402.39-402.39H228.35v-79.22h499.78v499.22h-79.78v-363.87L246.52-231.87Z" />
    </svg>
  )
}
