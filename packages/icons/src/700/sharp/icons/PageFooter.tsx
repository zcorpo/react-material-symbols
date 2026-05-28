import type { SVGProps, JSX } from 'react'

export default function PageFooter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-93h771v93H95Zm0-193v-578h771v578H95Zm93-94h584v-390H188v390Zm0 0v-390 390Z" />
    </svg>
  )
}
