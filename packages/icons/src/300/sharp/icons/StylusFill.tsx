import type { SVGProps } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m330.61-172.54-200.3 42.23 42.23-200.3 158.07 158.07Zm38.54-26.69L199.23-369.15 675-844.54 844.54-675 369.15-199.23Z" />
    </svg>
  )
}
