import type { SVGProps } from 'react'

export default function CreditCard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm45.39-437.15h669.22v-117.46H145.39v117.46Zm0 391.76h669.22v-287H145.39v287Zm0 0v-509.22 509.22Z" />
    </svg>
  )
}
