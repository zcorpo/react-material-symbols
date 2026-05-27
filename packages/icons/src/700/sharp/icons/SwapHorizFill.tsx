import type { SVGProps, JSX } from 'react'

export default function SwapHorizFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272-135 55-352l217-217 66 66-103 104h277v95H235l103 103-66 66Zm416-257-66-66 104-103H449v-95h277L622-760l66-66 218 217-218 217Z" />
    </svg>
  )
}
