import type { SVGProps, JSX } from 'react'

export default function EMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-280v-400h320v60H380v110h260v60H380v110h260v60H320Z" />
    </svg>
  )
}
