import type { SVGProps, JSX } from 'react'

export default function Looks5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M388-305h185v-187H410v-141h163v-22H388v185h163v143H388v22ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
