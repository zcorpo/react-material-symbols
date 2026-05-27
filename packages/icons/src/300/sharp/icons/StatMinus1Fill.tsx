import type { SVGProps } from 'react'

export default function StatMinus1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-367.39 253.85-593.54l32-31.61L480-431l194.15-194.15 32 31.61L480-367.39Z" />
    </svg>
  )
}
