import type { SVGProps, JSX } from 'react'

export default function ShoppingBasket({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M152-95 4-626h256l219-328 218 328h260L810-95H152Zm71-94h514l96-342H128l95 342Zm304-124q19-19 19-47t-19-47q-19-19-47-19t-47 19q-19 19-19 47t19 47q19 19 47 19t47-19ZM371-626h216L478-781 371-626Zm110 266Z" />
    </svg>
  )
}
