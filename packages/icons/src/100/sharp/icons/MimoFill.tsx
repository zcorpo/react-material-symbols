import type { SVGProps } from 'react'

export default function MimoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M308-172v-54l30-30H132v-532h696v532H622l30 30v54H308Z" />
    </svg>
  )
}
