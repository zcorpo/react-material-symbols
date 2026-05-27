import type { SVGProps } from 'react'

export default function TableRestaurantFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M670-492H291l-15 93h408l-14-93ZM141-143l55-349H42l92-325h692l93 325H764l56 349h-95l-25-162H261l-26 162h-94Z" />
    </svg>
  )
}
