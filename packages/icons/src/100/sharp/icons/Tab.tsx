import type { SVGProps, JSX } from 'react'

export default function Tab({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-234h652v-328H521v-164H154v492Zm-22 22v-536h696v536H132Zm22-22v-492 492Z" />
    </svg>
  )
}
