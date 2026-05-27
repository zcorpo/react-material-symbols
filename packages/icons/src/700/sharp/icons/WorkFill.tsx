import type { SVGProps, JSX } from 'react'

export default function WorkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-95v-639h242v-194h366v194h243v639H55Zm336-639h178v-100H391v100Z" />
    </svg>
  )
}
