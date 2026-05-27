import type { SVGProps } from 'react'

export default function Stylus({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m323-199-157 33 33-157 124 124Zm0 0L199-323l476-476 124 124-476 476Zm14-45 431-431-93-93-431 431 93 93Z" />
    </svg>
  )
}
