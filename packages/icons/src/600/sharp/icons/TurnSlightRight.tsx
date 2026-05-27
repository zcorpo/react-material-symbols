import type { SVGProps, JSX } from 'react'

export default function TurnSlightRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M350.39-145.87v-338.39l250.09-250.65h-127v-79.79h262.91v262.92h-79.78v-127l-227 226.43v306.48h-79.22Z" />
    </svg>
  )
}
