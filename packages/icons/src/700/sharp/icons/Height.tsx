import type { SVGProps, JSX } from 'react'

export default function Height({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-95 281-294l66-66 86 84v-409l-86 86-67-67 200-200 200 200-68 66-85-85v409l87-84 66 66L480-95Z" />
    </svg>
  )
}
