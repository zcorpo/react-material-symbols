import type { SVGProps, JSX } from 'react'

export default function Crop916Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M296.54-140v-680h367.3v680h-367.3Z" />
    </svg>
  )
}
