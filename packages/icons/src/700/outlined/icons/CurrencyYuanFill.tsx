import type { SVGProps, JSX } from 'react'

export default function CurrencyYuanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-95v-280H223v-94h193L164-866h112l204 323 204-323h112L545-469h192v94H527v280h-94Z" />
    </svg>
  )
}
