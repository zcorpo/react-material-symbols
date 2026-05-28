import type { SVGProps, JSX } from 'react'

export default function AlignJustifyCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-100v-760h45.38v760h-45.38Zm115.38-197.31v-365.38h85.39v365.38h-85.39Zm-270.77 0v-365.38h85.39v365.38h-85.39Z" />
    </svg>
  )
}
