import type { SVGProps } from 'react'

export default function NorthEast({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m201-136-66-66 488-488H353v-95h430v431h-94v-270L201-136Z" />
    </svg>
  )
}
