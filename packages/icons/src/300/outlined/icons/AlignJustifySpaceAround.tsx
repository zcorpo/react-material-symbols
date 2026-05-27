import type { SVGProps } from 'react'

export default function AlignJustifySpaceAround({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M814.61-100v-760H860v760h-45.39ZM100-100v-760h45.39v760H100Zm517.31-197.31v-365.38h85.38v365.38h-85.38Zm-360 0v-365.38h85.38v365.38h-85.38Z" />
    </svg>
  )
}
