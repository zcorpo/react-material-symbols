import type { SVGProps, JSX } from 'react'

export default function ViewSidebar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm619-465h137v-131H674v131Zm0 180h137v-120H674v120ZM149-229h465v-502H149v502Zm525 0h137v-131H674v131Z" />
    </svg>
  )
}
