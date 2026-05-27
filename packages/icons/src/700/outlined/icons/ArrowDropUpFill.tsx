import type { SVGProps } from 'react'

export default function ArrowDropUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m239-383 241-242 241 242H239Z" />
    </svg>
  )
}
