import type { SVGProps } from 'react'

export default function PenSize4({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223.85-300.34q0-31.85 22.15-53.66l360-360q22.03-22.15 53.94-22.15 31.91 0 54.06 22.32 22.15 22.33 22.15 54.17 0 31.85-22.15 53.66L354-246q-22.03 22.15-53.94 22.15-31.91 0-54.06-22.32-22.15-22.33-22.15-54.17Z" />
    </svg>
  )
}
