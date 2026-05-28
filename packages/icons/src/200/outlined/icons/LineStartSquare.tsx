import type { SVGProps, JSX } from 'react'

export default function LineStartSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M173.85-353.85h252.3v-252.3h-252.3v252.3Zm283.07 30.77H143.08v-313.84h313.84v141.54h380v30.76h-380v141.54ZM300-480Z" />
    </svg>
  )
}
