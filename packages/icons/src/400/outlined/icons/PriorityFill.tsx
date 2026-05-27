import type { SVGProps } from 'react'

export default function PriorityFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M351-120q-97 0-164-67t-67-164v-258q0-97 67-164t164-67h258q97 0 164 67t67 164v258q0 97-67 164t-164 67H351Zm88-205 240-240-43-43-197 197-97-97-43 43 140 140Z" />
    </svg>
  )
}
