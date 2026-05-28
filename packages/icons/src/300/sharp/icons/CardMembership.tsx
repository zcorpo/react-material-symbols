import type { SVGProps, JSX } from 'react'

export default function CardMembership({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.39-345.39h669.22v-105.3H145.39v105.3Zm206.3 230.77V-300H100v-560h760v560H608.31v185.38L480-179.39l-128.31 64.77Zm-206.3-430.23h669.22v-269.76H145.39v269.76Zm0 199.46v-469.22 469.22Z" />
    </svg>
  )
}
