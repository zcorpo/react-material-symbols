import type { SVGProps, JSX } from 'react'

export default function SouthEastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M353-177v-94h270L135-760l66-66 488 489v-270h94v430H353Z" />
    </svg>
  )
}
