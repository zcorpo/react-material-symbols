import type { SVGProps, JSX } from 'react'

export default function MagnificationSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M199.09-528H355v-152.91H199.09V-528ZM65.87-145.87V-814.7H894.7v668.83H65.87Zm79.22-79.22h669.82v-509.82H145.09v509.82Zm0 0v-509.82 509.82Z" />
    </svg>
  )
}
