import type { SVGProps } from 'react'

export default function CallMergeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m272-135-66-67 225-224v-259L326-580l-67-67 219-219 219 219-67 67-105-105v297L272-135Zm410 0L520-297l66-67 162 162-66 67Z" />
    </svg>
  )
}
