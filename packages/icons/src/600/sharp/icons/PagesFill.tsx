import type { SVGProps } from 'react'

export default function PagesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-105.87V-854.7H854.7v748.83H105.87ZM363-310l117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
    </svg>
  )
}
