import type { SVGProps } from 'react'

export default function FirstPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-250v-460h45.38v460H250Zm435.08-6.08L463.39-477.77l221.69-221.69 32.61 32.61-189.08 189.08 189.08 189.08-32.61 32.61Z" />
    </svg>
  )
}
