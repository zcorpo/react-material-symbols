import type { SVGProps, JSX } from 'react'

export default function DockToBottomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M182.15-393.93h595.7v-383.92h-595.7v383.92Zm-68.13 279.91v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}
