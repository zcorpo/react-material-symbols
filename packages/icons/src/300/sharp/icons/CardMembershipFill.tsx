import type { SVGProps, JSX } from 'react'

export default function CardMembershipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-860h760v560H608.31v185.38L480-179.39l-128.31 64.77V-300H100v-560Zm45.39 409.31h669.22v-94.16H145.39v94.16Z" />
    </svg>
  )
}
