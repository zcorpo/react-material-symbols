import type { SVGProps, JSX } from 'react'

export default function NorthEastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m201-136-66-66 488-488H353v-95h430v431h-94v-270L201-136Z" />
    </svg>
  )
}
