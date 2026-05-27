import type { SVGProps, JSX } from 'react'

export default function Crop916Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262-105.87V-854.7h436v748.83H262Z" />
    </svg>
  )
}
