import type { SVGProps, JSX } from 'react'

export default function VerticalDistribute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-132v-34h696v34H132Zm174-317v-62h348v62H306ZM132-794v-34h696v34H132Z" />
    </svg>
  )
}
