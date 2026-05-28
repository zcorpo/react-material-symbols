import type { SVGProps, JSX } from 'react'

export default function SouthEast({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M364-200v-60h294L160-758l42-42 498 498v-294h60v396H364Z" />
    </svg>
  )
}
