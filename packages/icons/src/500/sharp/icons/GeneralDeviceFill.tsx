import type { SVGProps, JSX } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M314.02-208.09v-642.19h332.2v642.19h-332.2Zm0 98.37v-68.37h332.2v68.37h-332.2Z" />
    </svg>
  )
}
