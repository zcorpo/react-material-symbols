import type { SVGProps, JSX } from 'react'

export default function AzmFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m630-270 170-170v-360H440L270-630h360v360ZM400-40l170-170v-360H210L40-400h360v360Z" />
    </svg>
  )
}
