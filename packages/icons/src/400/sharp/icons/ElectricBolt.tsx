import type { SVGProps, JSX } from 'react'

export default function ElectricBolt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m286-79 171-307-337-40 495-455h59L503-574l337 40L345-79h-59Zm167-187 252-223-297-36 99-169-253 224 297 35-98 169Zm27-214Z" />
    </svg>
  )
}
