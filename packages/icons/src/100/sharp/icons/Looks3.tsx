import type { SVGProps } from 'react'

export default function Looks3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M388-305h185v-350H388v22h163v141H448v22h103v143H388v22ZM172-172v-616h616v616H172Zm22-22h572v-572H194v572Zm0 0v-572 572Z" />
    </svg>
  )
}
