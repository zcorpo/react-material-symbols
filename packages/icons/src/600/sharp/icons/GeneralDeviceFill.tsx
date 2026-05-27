import type { SVGProps, JSX } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305.87-205.48v-658.83H654.7v658.83H305.87Zm0 109.79v-79.79H654.7v79.79H305.87Z" />
    </svg>
  )
}
