import type { SVGProps } from 'react'

export default function FormatImageLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-266v-429h429v429H95Zm0-513v-87h771v87H95Zm489 171v-87h282v87H584Zm0 171v-87h282v87H584Zm0 171v-87h282v87H584ZM95-95v-87h771v87H95Z" />
    </svg>
  )
}
