import type { SVGProps, JSX } from 'react'

export default function PresentToAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.92-339.54h44.77V-537l85.16 86.77 32.23-32.62-140.7-140.46-140.46 140.46 32.62 32.62L457.92-537v197.46ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
