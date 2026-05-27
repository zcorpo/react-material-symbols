import type { SVGProps } from 'react'

export default function Crop32Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-225.87V-734.7H854.7v508.83H105.87Z" />
    </svg>
  )
}
