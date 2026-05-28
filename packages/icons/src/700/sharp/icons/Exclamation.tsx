import type { SVGProps, JSX } from 'react'

export default function Exclamation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-369v-414h94v414h-94Zm0 192v-94h94v94h-94Z" />
    </svg>
  )
}
