import type { SVGProps, JSX } from 'react'

export default function DesktopMac({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M391-172v-27l75-75H132v-514h696v514H494l75 75v27H391ZM154-331h652v-435H154v435Zm0 0v-435 435Z" />
    </svg>
  )
}
