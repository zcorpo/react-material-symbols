import type { SVGProps, JSX } from 'react'

export default function TooltipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-65.87 369.78-230.78H65.87V-894.7H894.7v663.92H590.22L480-65.87Z" />
    </svg>
  )
}
