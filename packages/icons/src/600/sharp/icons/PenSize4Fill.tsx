import type { SVGProps } from 'react'

export default function PenSize4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M199.83-300.14q0-41.25 29.39-70.64l360-360q29.57-29.39 70.87-29.39 41.3 0 70.69 29.53t29.39 70.78q0 41.25-29.39 70.64l-360 360q-29.57 29.39-70.87 29.39-41.3 0-70.69-29.53t-29.39-70.78Z" />
    </svg>
  )
}
