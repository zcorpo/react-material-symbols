import type { SVGProps, JSX } from 'react'

export default function Looks6Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M410-492v-141h122v-22H388v350h185v-187H410Zm0 22h141v143H410v-143ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
