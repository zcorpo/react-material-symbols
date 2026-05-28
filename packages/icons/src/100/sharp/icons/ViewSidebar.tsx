import type { SVGProps, JSX } from 'react'

export default function ViewSidebar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm521-363h153v-151H653v151Zm0 168h153v-146H653v146ZM154-234h477v-492H154v492Zm499 0h153v-151H653v151Z" />
    </svg>
  )
}
