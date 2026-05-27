import type { SVGProps } from 'react'

export default function LineEndSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M471.54-291.54v-165.77h-370v-45.38h370v-165.77h376.92v376.92H471.54Z" />
    </svg>
  )
}
