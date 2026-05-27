import type { SVGProps } from 'react'

export default function Dataset({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-572H194v572Zm0 0v-572 572Zm115-355h102v-102H309v102Zm240 0h102v-102H549v102ZM309-309h102v-102H309v102Zm240 0h102v-102H549v102Z" />
    </svg>
  )
}
