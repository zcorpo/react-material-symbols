import type { SVGProps } from 'react'

export default function CompareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M411-17v-78H95v-771h316v-77h71v926h-71ZM188-231h223v-255L188-231ZM553-95v-387l218 249v-538H553v-95h313v771H553Z" />
    </svg>
  )
}
