import type { SVGProps } from 'react'

export default function PackageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-290h200v-60H280v60ZM140-140v-680h680v680H140Zm200-634.61v305.92l140-70 140 70v-305.92H340Z" />
    </svg>
  )
}
