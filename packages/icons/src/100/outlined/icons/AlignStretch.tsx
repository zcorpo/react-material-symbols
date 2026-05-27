import type { SVGProps } from 'react'

export default function AlignStretch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M309-589v-217H132v-22h696v22H651v217H309ZM132-132v-22h177v-217h342v217h177v22H132Z" />
    </svg>
  )
}
