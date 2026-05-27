import type { SVGProps } from 'react'

export default function ThumbsUpDoubleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m691-287 43-102v-183H493l16-113-30-30 165-165 50 50-22 152h248v111L801-287H691ZM40-120v-392h60v392H40Zm120 0v-357l235-237 50 50-21 152h250v111L555-120H160Z" />
    </svg>
  )
}
