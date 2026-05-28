import type { SVGProps, JSX } from 'react'

export default function Explicit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M366-280h227v-60H426v-106h167v-60H426v-107h167v-60H366v393ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z" />
    </svg>
  )
}
