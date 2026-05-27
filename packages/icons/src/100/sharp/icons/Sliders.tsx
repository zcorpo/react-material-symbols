import type { SVGProps } from 'react'

export default function Sliders({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-412v-136h696v136H132Zm430-22h245v-92H562v92Z" />
    </svg>
  )
}
