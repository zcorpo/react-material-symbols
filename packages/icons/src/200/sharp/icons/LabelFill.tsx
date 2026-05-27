import type { SVGProps, JSX } from 'react'

export default function LabelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h505.62l214.61 280-213.61 280H120Z" />
    </svg>
  )
}
