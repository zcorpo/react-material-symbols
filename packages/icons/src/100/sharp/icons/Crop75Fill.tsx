import type { SVGProps, JSX } from 'react'

export default function Crop75Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-252v-456h616v456H172Z" />
    </svg>
  )
}
