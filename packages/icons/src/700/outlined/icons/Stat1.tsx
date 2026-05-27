import type { SVGProps } from 'react'

export default function Stat1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m282-330-66-66 264-264 264 264-66 66-198-198-198 198Z" />
    </svg>
  )
}
