import type { SVGProps } from 'react'

export default function CheckSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m407-402 250-250q9-9 21-9t21 9q9 9 9 21t-9 21L428-339q-9 9-21 9t-21-9L275-450q-9-9-9-21t9-21q9-9 21-9t21 9l90 90Z" />
    </svg>
  )
}
