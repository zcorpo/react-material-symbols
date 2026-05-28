import type { SVGProps, JSX } from 'react'

export default function RoadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h60v640h-60Zm290 0v-161h60v161h-60Zm290 0v-640h60v640h-60ZM450-401v-159h60v159h-60Zm0-239v-160h60v160h-60Z" />
    </svg>
  )
}
