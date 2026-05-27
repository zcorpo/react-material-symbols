import type { SVGProps } from 'react'

export default function Stairs2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-252v-22h224.5v-217H581v-217h247v22H603.5v217H379v217H132Z" />
    </svg>
  )
}
