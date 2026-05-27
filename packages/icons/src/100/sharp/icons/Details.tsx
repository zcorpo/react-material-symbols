import type { SVGProps } from 'react'

export default function Details({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m168-172 312-561 312 561H168Zm38-22h263v-474L206-194Zm285 0h263L491-668v474Z" />
    </svg>
  )
}
