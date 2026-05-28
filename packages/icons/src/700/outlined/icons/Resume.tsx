import type { SVGProps, JSX } from 'react'

export default function Resume({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M193-193v-574h94v574h-94Zm208 0 479-287-479-287v574Zm95-186v-202l164 101-164 101Zm0-101Z" />
    </svg>
  )
}
