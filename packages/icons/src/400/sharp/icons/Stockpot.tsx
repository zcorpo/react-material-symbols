import type { SVGProps, JSX } from 'react'

export default function Stockpot({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-499h720v499H120Zm60-60h600v-379H180v379Zm-60-479v-61h250v-80h220v80h250v61H120Zm360 289Z" />
    </svg>
  )
}
