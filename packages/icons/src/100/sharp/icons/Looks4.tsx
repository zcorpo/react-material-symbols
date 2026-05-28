import type { SVGProps, JSX } from 'react'

export default function Looks4({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-572H194v572Zm0 0v-572 572Zm357-111h22v-350h-22v163H410v-163h-22v185h163v165Z" />
    </svg>
  )
}
