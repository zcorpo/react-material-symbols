import type { SVGProps } from 'react'

export default function FormatImageRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M436-266v-429h429v429H436Zm94-87h240v-255H530v255ZM95-95v-87h771v87H95Zm0-171v-87h281v87H95Zm0-171v-87h281v87H95Zm0-171v-87h281v87H95Zm0-171v-87h771v87H95Zm555 299Z" />
    </svg>
  )
}
