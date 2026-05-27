import type { SVGProps, JSX } from 'react'

export default function ViewAgendaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-80v-376h771v376H95Zm0-424v-377h771v377H95Z" />
    </svg>
  )
}
