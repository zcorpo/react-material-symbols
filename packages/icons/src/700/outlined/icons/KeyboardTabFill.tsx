import type { SVGProps, JSX } from 'react'

export default function KeyboardTabFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M811-223v-514h95v514h-95Zm-364 8-68-66 153-152H55v-94h477L381-679l66-66 265 265-265 265Z" />
    </svg>
  )
}
