import type { SVGProps } from 'react'

export default function West({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M378-235 132-481l246-246 15 15-221 220h657v22H173l221 220-16 15Z" />
    </svg>
  )
}
