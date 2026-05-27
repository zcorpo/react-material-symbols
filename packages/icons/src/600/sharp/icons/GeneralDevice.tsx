import type { SVGProps, JSX } from 'react'

export default function GeneralDevice({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305.87-205.48v-658.83H654.7v658.83H305.87Zm79.22-79.22h189.82v-499.82H385.09v499.82ZM305.87-95.69v-79.79H654.7v79.79H305.87Zm79.22-189.01h189.82-189.82Z" />
    </svg>
  )
}
