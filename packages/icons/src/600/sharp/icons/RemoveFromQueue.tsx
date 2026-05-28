import type { SVGProps, JSX } from 'react'

export default function RemoveFromQueue({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M310.39-486.22h339.22V-566H310.39v79.78Zm12.26 380.35v-80H65.87V-854.7H894.7v668.83H637.91v80H322.65ZM145.09-265.09h669.82v-509.82H145.09v509.82Zm0 0v-509.82 509.82Z" />
    </svg>
  )
}
