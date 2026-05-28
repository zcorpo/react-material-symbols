import type { SVGProps, JSX } from 'react'

export default function BorderAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm676-94v-261H510v261h261Zm0-582H510v261h261v-261Zm-582 0v261h261v-261H189Zm0 582h261v-261H189v261Z" />
    </svg>
  )
}
