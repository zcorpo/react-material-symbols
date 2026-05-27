import type { SVGProps, JSX } from 'react'

export default function EMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-280h320v-60H380v-110h220v-60H380v-110h260v-60H320v400ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
