import type { SVGProps, JSX } from 'react'

export default function VerticalDistributeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-100v-50h760v50H100Zm190-337.31v-85.38h380v85.38H290ZM100-810v-50h760v50H100Z" />
    </svg>
  )
}
