import type { SVGProps, JSX } from 'react'

export default function ViewAgendaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-97.39v-356H854.7v356H105.87Zm0-409.22v-356.57H854.7v356.57H105.87Z" />
    </svg>
  )
}
