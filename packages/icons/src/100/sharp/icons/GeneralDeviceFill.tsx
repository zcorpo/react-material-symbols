import type { SVGProps, JSX } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-283v-505h240v505H360Zm0 79v-22h240v22H360Z" />
    </svg>
  )
}
