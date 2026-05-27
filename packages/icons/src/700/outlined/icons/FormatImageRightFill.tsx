import type { SVGProps, JSX } from 'react'

export default function FormatImageRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M436-266v-429h429v429H436ZM95-95v-87h771v87H95Zm0-171v-87h281v87H95Zm0-171v-87h281v87H95Zm0-171v-87h281v87H95Zm0-171v-87h771v87H95Z" />
    </svg>
  )
}
