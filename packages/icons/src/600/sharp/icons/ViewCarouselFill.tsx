import type { SVGProps, JSX } from 'react'

export default function ViewCarouselFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-277.65v-405.26h140v405.26h-140Zm200 91.78V-774.7h424.3v588.83h-424.3Zm484.3-91.78v-405.26H894.7v405.26H750.17Z" />
    </svg>
  )
}
