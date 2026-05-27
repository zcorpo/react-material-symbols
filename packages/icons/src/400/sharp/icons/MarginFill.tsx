import type { SVGProps, JSX } from 'react'

export default function MarginFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm155-487h78v-78h-78v78Zm166-1 79 1 1-79-79-1-1 79Zm167 1h78v-78h-78v78ZM275-441h78v-78h-78v78Zm166-1 79 1 1-79-79-1-1 79Zm167 1h78v-78h-78v78Z" />
    </svg>
  )
}
