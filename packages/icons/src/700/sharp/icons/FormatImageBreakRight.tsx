import type { SVGProps, JSX } from 'react'

export default function FormatImageBreakRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-772v-94h771v94H95Zm337 509v-434h434v434H432Zm95-95h244v-244H527v244ZM95-95v-93h771v93H95Zm554-385Z" />
    </svg>
  )
}
