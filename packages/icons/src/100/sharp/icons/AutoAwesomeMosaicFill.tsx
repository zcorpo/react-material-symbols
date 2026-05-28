import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMosaicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M443-172H172v-616h271v616Zm74-345v-271h271v271H517Zm0 345v-271h271v271H517Z" />
    </svg>
  )
}
