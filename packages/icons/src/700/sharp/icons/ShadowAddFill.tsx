import type { SVGProps } from 'react'

export default function ShadowAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M513-404v-109H404v-94h109v-109h94v109h109v94H607v109h-94ZM55-55v-679h172v-172h679v679H734v172H55Zm266-266h490v-490H321v490Z" />
    </svg>
  )
}
