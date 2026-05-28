import type { SVGProps, JSX } from 'react'

export default function MergeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m241-95-66-66 223-223q21-21 28-38t7-53v-211l-90 90-66-66 203-203 203 203-66 66-90-90v211q0 36 7 53t28 38l223 223-66 66-239-239L241-95Z" />
    </svg>
  )
}
