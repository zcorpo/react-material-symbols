import type { SVGProps } from 'react'

export default function South({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-55 175-360l66-67 192 194v-671h94v671l193-193 66 66L480-55Z" />
    </svg>
  )
}
