import type { SVGProps, JSX } from 'react'

export default function LabelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7h580.22L895.7-480 647.14-145.87H65.87Z" />
    </svg>
  )
}
