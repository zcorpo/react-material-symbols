import type { SVGProps } from 'react'

export default function Crop23Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M225.87-65.87V-894.7H734.7v828.83H225.87Z" />
    </svg>
  )
}
