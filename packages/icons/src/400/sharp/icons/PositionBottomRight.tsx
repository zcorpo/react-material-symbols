import type { SVGProps } from 'react'

export default function PositionBottomRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M370-287h360v-90H370v90ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0-600v600-600Z" />
    </svg>
  )
}
