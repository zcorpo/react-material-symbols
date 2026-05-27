import type { SVGProps, JSX } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M361-141 83-83l58-278 220 220Zm46-40L181-407l499-499 226 226-499 499Z" />
    </svg>
  )
}
