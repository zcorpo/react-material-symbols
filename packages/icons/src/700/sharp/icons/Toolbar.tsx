import type { SVGProps } from 'react'

export default function Toolbar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-543h582v-133H189v133Zm582 95H189v354h582v-354Zm-582-95v95-95Zm0 0v-133 133Zm0 95v354-354Z" />
    </svg>
  )
}
