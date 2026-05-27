import type { SVGProps, JSX } from 'react'

export default function RequestPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M446.65-235.22h64.07v-40h92.63v-196.69H420.72v-68.81h182.63v-64.06h-90v-40h-64.07v40h-92.63v196.69h182.63v68.81H356.65v64.06h90v40ZM154.02-74.02v-812.2h409.61l242.59 242.66v569.54h-652.2Z" />
    </svg>
  )
}
