import type { SVGProps, JSX } from 'react'

export default function ViewComfyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-502.69V-780h760v277.31H100ZM375.31-180v-277.31H860V-180H375.31ZM100-180v-277.31h229.92V-180H100Z" />
    </svg>
  )
}
