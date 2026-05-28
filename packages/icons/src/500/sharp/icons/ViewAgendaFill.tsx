import type { SVGProps, JSX } from 'react'

export default function ViewAgendaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-110.43v-341h732.2v341h-732.2Zm0-398.14V-849.8h732.2v341.23h-732.2Z" />
    </svg>
  )
}
