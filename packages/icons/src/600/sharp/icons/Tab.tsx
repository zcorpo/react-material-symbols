import type { SVGProps, JSX } from 'react'

export default function Tab({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.09-225.09h669.82V-567H524v-167.91H145.09v509.82Zm-79.22 79.22V-814.7H894.7v668.83H65.87Zm79.22-79.22v-509.82 509.82Z" />
    </svg>
  )
}
