import type { SVGProps, JSX } from 'react'

export default function ContextualTokenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M281-356h210v-60H281v60Zm337 0h61v-248h-61v248ZM281-544h210v-60H281v60ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
