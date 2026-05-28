import type { SVGProps, JSX } from 'react'

export default function HideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m188-173-16-16 219-219H260v-22h169v169h-22v-131L188-173Zm344-360v-169h22v132l219-219 15 15-219 219h132v22H532Z" />
    </svg>
  )
}
