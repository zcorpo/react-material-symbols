import type { SVGProps } from 'react'

export default function ViewAgenda({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-110.43v-341h732.2v341h-732.2Zm68.13-68.14h595.7V-383.3h-595.7v204.73Zm-68.13-330V-849.8h732.2v341.23h-732.2Zm68.13-68.36h595.7v-204.5h-595.7v204.5Zm0 193.63v204.73-204.73Zm0-398.13v204.5-204.5Z" />
    </svg>
  )
}
