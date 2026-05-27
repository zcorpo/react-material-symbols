import type { SVGProps, JSX } from 'react'

export default function Icon5gFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-280v-60h220v-110H120v-230h280v60H180v110h220v230H120Zm720-232v232H490v-400h350v60H550v280h231v-112H678v-60h162Z" />
    </svg>
  )
}
