import type { SVGProps, JSX } from 'react'

export default function HideImageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M866-223 223-866h643v643ZM822-24l-71-71H95v-656l-70-70 51-51L873-75l-51 51ZM223-268h357l-91-91-43 53-105-122-118 160Z" />
    </svg>
  )
}
