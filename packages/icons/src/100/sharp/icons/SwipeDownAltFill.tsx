import type { SVGProps, JSX } from 'react'

export default function SwipeDownAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-132 356-256l16-16 97 98v-225q-69-7-116-55t-47-120q0-72 51-123t123-51q72 0 123 51t51 123q0 72-47 120t-116 55v225l98-98 15 16-124 124Z" />
    </svg>
  )
}
