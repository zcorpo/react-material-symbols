import type { SVGProps, JSX } from 'react'

export default function ViewWeek({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-234h203v-492H154v492Zm225 0h202v-492H379v492Zm224 0h203v-492H603v492Zm225 22H132v-536h696v536Z" />
    </svg>
  )
}
