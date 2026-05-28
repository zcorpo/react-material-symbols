import type { SVGProps, JSX } from 'react'

export default function ArrowMenuCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M430-258v-445L201-480l229 222ZM545-95h94v-771h-94v771Z" />
    </svg>
  )
}
