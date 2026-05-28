import type { SVGProps, JSX } from 'react'

export default function HealthAndBeautyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M651-80v-60h175v-104H651v-60h175v-104H651v-60h175v-104H651v-60h175v-104H651v-60h269v716H651Zm-454 0L40-512l206-121v-246h124v246l206 121L419-80H197Z" />
    </svg>
  )
}
