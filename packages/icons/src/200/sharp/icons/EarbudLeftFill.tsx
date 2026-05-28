import type { SVGProps, JSX } from 'react'

export default function EarbudLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M273-120v-377.92H160V-760h299.38v640H273Zm305.62-297.46V-840h24.61q84.49 0 140.63 62.43T800-629.15q0 86-56.14 148.84-56.14 62.85-140.63 62.85h-24.61Z" />
    </svg>
  )
}
