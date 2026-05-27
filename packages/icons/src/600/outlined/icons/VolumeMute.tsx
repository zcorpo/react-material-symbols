import type { SVGProps, JSX } from 'react'

export default function VolumeMute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265.87-345.87V-614.7h168.48L654.7-834.48v708.96L434.35-345.87H265.87Zm79.22-79.22h124.17l105.65 101.65v-312.12L469.26-534.91H345.09v109.82ZM459-480Z" />
    </svg>
  )
}
