import type { SVGProps } from 'react'

export default function Stat0Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-179.65 179.65-480 480-780.35 780.35-480 480-179.65Z" />
    </svg>
  )
}
