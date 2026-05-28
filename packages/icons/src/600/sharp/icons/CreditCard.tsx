import type { SVGProps, JSX } from 'react'

export default function CreditCard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm79.22-486.26h669.82v-102.78H145.09v102.78Zm0 407.04h669.82v-278.04H145.09v278.04Zm0 0v-509.82 509.82Z" />
    </svg>
  )
}
