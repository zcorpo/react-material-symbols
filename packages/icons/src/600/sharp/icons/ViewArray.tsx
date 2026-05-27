import type { SVGProps, JSX } from 'react'

export default function ViewArray({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-185.87V-774.7h100v588.83h-100Zm160 0V-774.7h424.3v588.83h-424.3Zm484.3 0V-774.7H854.7v588.83H750.17Zm-405.08-79.22h265.87v-430.39H345.09v430.39Zm132.65-215.48Z" />
    </svg>
  )
}
