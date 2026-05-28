import type { SVGProps, JSX } from 'react'

export default function AlignJustifyFlexEndFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M814.61-100v-760H860v760h-45.39Zm-237.3-197.31v-365.38h85.38v365.38h-85.38Zm-240 0v-365.38h85.38v365.38h-85.38Z" />
    </svg>
  )
}
