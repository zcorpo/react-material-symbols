import type { SVGProps, JSX } from 'react'

export default function LineEndSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M516.92-336.92h286.16v-286.16H516.92v286.16Zm-45.38 45.38v-165.77h-370v-45.38h370v-165.77h376.92v376.92H471.54ZM660-480Z" />
    </svg>
  )
}
