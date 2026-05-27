import type { SVGProps, JSX } from 'react'

export default function TooltipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-132-86-133H132v-563h696v563H566l-86 133Z" />
    </svg>
  )
}
