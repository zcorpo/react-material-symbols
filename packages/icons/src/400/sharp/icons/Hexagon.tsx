import type { SVGProps, JSX } from 'react'

export default function Hexagon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272-120 64-480l208-360h416l208 360-208 360H272Zm34-60h348l172-300-172-300H306L133-480l173 300Zm174-300Z" />
    </svg>
  )
}
