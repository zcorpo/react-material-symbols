import type { SVGProps, JSX } from 'react'

export default function Hide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m162-96-66-66 196-197H183v-94h270v270h-94v-109L162-96Zm346-412v-270h94v109l196-195 66 66-195 196h109v94H508Z" />
    </svg>
  )
}
