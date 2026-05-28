import type { SVGProps, JSX } from 'react'

export default function AndroidCellDual5Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-384v-181h100v181H40Zm195 0v-244h100v244H235Zm195 0v-289h100v289H430Zm195 0v-331h100v331H625Zm195 0v-416h100v416H820ZM40-160v-164h100v164H40Zm195 0v-164h100v164H235Zm195 0v-164h100v164H430Zm195 0v-164h100v164H625Zm195 0v-164h100v164H820Z" />
    </svg>
  )
}
