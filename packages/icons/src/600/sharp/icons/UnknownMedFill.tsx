import type { SVGProps, JSX } from 'react'

export default function UnknownMedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M63.04-440.39v-119.22H440v119.22H63.04Zm456.96 0v-119.22h376.96v119.22H520Z" />
    </svg>
  )
}
