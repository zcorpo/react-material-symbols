import type { SVGProps, JSX } from 'react'

export default function ContextualToken({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M281-356h210v-60H281v60Zm337 0h61v-248h-61v248ZM281-544h210v-60H281v60ZM154-234h652v-492H154v492Zm-22 22v-536h696v536H132Zm22-22v-492 492Z" />
    </svg>
  )
}
