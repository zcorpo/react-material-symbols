import type { SVGProps } from 'react'

export default function AlignStretch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297.31-577.31v-237.3H100V-860h760v45.39H662.69v237.3H297.31ZM100-100v-45.39h197.31v-237.3h365.38v237.3H860V-100H100Z" />
    </svg>
  )
}
