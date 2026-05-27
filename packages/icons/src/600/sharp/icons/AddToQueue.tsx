import type { SVGProps, JSX } from 'react'

export default function AddToQueue({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M446.61-362.83h66.78v-126.6H640v-66.79H513.39v-126.61h-66.78v126.61H320v66.79h126.61v126.6ZM322.65-105.87v-80H65.87V-854.7H894.7v668.83H637.91v80H322.65ZM145.09-265.09h669.82v-509.82H145.09v509.82Zm0 0v-509.82 509.82Z" />
    </svg>
  )
}
