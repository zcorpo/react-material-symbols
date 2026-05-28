import type { SVGProps, JSX } from 'react'

export default function EntFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M218-58v-184q-57-55-88.5-127.5T98-520q0-160.08 111.12-271.54Q320.24-903 479.84-903 612-903 714.5-824T849-620l71 282H783v200H623v80H456l18-262h127v-79H478l8-103h172v-80H411L376-58H218Z" />
    </svg>
  )
}
