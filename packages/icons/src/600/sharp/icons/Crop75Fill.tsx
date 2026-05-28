import type { SVGProps, JSX } from 'react'

export default function Crop75Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-185.87V-774.7H854.7v588.83H105.87Z" />
    </svg>
  )
}
