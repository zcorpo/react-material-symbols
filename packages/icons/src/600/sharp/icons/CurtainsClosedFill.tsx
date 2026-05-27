import type { SVGProps, JSX } from 'react'

export default function CurtainsClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60.78-100.78v-79.79h80v-678.65h678.44v678.65h80v79.79H60.78Zm367.05-79.79h104.34v-598.86H427.83v598.86Z" />
    </svg>
  )
}
