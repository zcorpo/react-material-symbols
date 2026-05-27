import type { SVGProps } from 'react'

export default function Stat1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m289.69-375.31-22-22L480-609.62l212.31 212.31-22 22L480-566.38 289.69-375.31Z" />
    </svg>
  )
}
