import type { SVGProps } from 'react'

export default function Speed075Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-305v-22h22v22h-22Zm311 0v-22h163v-143H563v-185h185v22H585v141h163v187H563Zm-194 0 84-328H292v-22h185v21l-84 329h-24Z" />
    </svg>
  )
}
