import type { SVGProps, JSX } from 'react'

export default function Label({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h489l207 268-206 268H132Zm22-22h456l191-246-191-246H154v492Zm324-246Z" />
    </svg>
  )
}
