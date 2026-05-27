import type { SVGProps } from 'react'

export default function ArrowOutwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m250-221-67-67 395-395H224v-94h515v514h-95v-353L250-221Z" />
    </svg>
  )
}
