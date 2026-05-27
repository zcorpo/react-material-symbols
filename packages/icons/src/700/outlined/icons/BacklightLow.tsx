import type { SVGProps, JSX } from 'react'

export default function BacklightLow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M63-370v-95h144v95H63Zm198-200L151-679l67-67 110 110-67 66Zm2 364v-134h434v134H263Zm170-474v-155h94v155h-94Zm265 111-66-67 109-110 66 68-109 109Zm55 199v-95h144v95H753Z" />
    </svg>
  )
}
