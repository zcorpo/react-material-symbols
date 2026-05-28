import type { SVGProps, JSX } from 'react'

export default function Escalator({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M230-250h176l200-360h124v-100H554L354-350H230v100ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z" />
    </svg>
  )
}
