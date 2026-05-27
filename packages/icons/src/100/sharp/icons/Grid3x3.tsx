import type { SVGProps, JSX } from 'react'

export default function Grid3x3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M376-212v-164H212v-22h164v-164H212v-22h164v-164h22v164h164v-164h22v164h164v22H584v164h164v22H584v164h-22v-164H398v164h-22Zm22-186h164v-164H398v164Z" />
    </svg>
  )
}
