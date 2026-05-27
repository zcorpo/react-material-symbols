import type { SVGProps } from 'react'

export default function FormatIndentDecreaseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm320-165v-60h400v60H440Zm0-165v-60h400v60H440Zm0-165v-60h400v60H440ZM120-780v-60h720v60H120Zm141 437L120-483l141-136v276Z" />
    </svg>
  )
}
