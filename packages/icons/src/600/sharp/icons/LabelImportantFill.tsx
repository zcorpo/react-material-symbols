import type { SVGProps } from 'react'

export default function LabelImportantFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87 315.09-480 65.87-814.7h579.61L894.7-480 645.91-145.87H65.87Z" />
    </svg>
  )
}
