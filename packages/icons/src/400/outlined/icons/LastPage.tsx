import type { SVGProps, JSX } from 'react'

export default function LastPage({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m272-245-43-43 192-192-192-192 43-43 235 235-235 235Zm388 5v-480h60v480h-60Z" />
    </svg>
  )
}
