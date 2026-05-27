import type { SVGProps } from 'react'

export default function KeyboardTabRtl({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M142.15-235.93H74.02v-488.14h68.13v488.14Zm345.74 2.67L241.15-480l246.74-246.74L535.63-679 371.7-514.07h514.52v68.14H371.7L536.87-281l-48.98 47.74Z" />
    </svg>
  )
}
