import type { SVGProps, JSX } from 'react'

export default function SpaceDashboard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h275v-572H194v572Zm297 0h275v-286H491v286Zm0-308h275v-264H491v264Z" />
    </svg>
  )
}
