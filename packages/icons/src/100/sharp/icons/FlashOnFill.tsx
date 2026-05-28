import type { SVGProps, JSX } from 'react'

export default function FlashOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-244v-208H352v-376h259l-63 217h155L452-244Z" />
    </svg>
  )
}
