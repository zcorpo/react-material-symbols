import type { SVGProps, JSX } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M314.02-208.09v-573.82q0-28.7 19.77-48.54 19.76-19.83 48.36-19.83h195.7q28.7 0 48.53 19.83 19.84 19.84 19.84 48.54v573.82h-332.2Zm0 98.37v-68.37h332.2v68.37h-332.2Z" />
    </svg>
  )
}
