import type { SVGProps } from 'react'

export default function KidStarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m293-720 187-243 187 243 291 99-182 261 6 294-302-84-301 84 6-294L2-621l291-99Z" />
    </svg>
  )
}
