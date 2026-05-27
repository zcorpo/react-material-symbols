import type { SVGProps, JSX } from 'react'

export default function Timer2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M330-200v-320h260v-160H330v-80h340v320H410v160h260v80H330Z" />
    </svg>
  )
}
