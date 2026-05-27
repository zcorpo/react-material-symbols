import type { SVGProps, JSX } from 'react'

export default function MagnificationSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-528h161v-158H194v158ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z" />
    </svg>
  )
}
