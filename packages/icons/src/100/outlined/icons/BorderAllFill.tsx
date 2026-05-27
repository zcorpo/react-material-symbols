import type { SVGProps } from 'react'

export default function BorderAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M491-172v-297h297v297H491Zm0-319v-297h297v297H491Zm-319 0v-297h297v297H172Zm0 319v-297h297v297H172Z" />
    </svg>
  )
}
