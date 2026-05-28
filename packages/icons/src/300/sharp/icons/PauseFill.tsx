import type { SVGProps, JSX } from 'react'

export default function PauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M556.54-220v-520h160.77v520H556.54Zm-313.85 0v-520h161.16v520H242.69Z" />
    </svg>
  )
}
