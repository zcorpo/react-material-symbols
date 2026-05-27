import type { SVGProps } from 'react'

export default function Timer5Shutter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M369-246v-16h246v-210H369v-242h262v16H385v210h246v242H369Z" />
    </svg>
  )
}
