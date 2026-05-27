import type { SVGProps } from 'react'

export default function Dataset({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-94h582v-582H189v582Zm0 0v-582 582Zm95-335h152v-152H284v152Zm240 0h152v-152H524v152ZM284-284h152v-152H284v152Zm240 0h152v-152H524v152Z" />
    </svg>
  )
}
