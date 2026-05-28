import type { SVGProps, JSX } from 'react'

export default function UndoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-252v-22h300q64 0 108-45.5t44-110q0-64.5-44-109.5t-108-45H255l126 126-16 16-153-153 153-153 16 16-126 126h339q73 0 124 51.5T769-430q0 73-51 125.5T594-252H295Z" />
    </svg>
  )
}
