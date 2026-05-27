import type { SVGProps, JSX } from 'react'

export default function HorizontalRuleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-433v-94h691v94H135Z" />
    </svg>
  )
}
