import type { SVGProps, JSX } from 'react'

export default function ParkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M502-132h-44v-157H218l169-250h-83l176-251 176 251h-82l168 250H502v157Z" />
    </svg>
  )
}
