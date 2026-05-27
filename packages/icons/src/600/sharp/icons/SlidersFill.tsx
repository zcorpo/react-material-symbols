import type { SVGProps, JSX } from 'react'

export default function SlidersFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M68-347v-266h824v266H68Zm498-73h257v-120H566v120Z" />
    </svg>
  )
}
