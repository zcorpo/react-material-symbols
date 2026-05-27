import type { SVGProps, JSX } from 'react'

export default function ShadowMinus({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-679h172v-172h679v679H734v172H55Zm266-266h490v-490H321v490Zm83-192v-94h312v94H404Z" />
    </svg>
  )
}
