import type { SVGProps } from 'react'

export default function SpaceDashboard2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M819-172v-616h-31v616h31Zm-669 22h399v-660H150v660Zm421 0h239v-319H571v319Zm0-341h239v-319H571v319Z" />
    </svg>
  )
}
