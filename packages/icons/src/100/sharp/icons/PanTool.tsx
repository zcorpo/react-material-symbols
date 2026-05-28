import type { SVGProps, JSX } from 'react'

export default function PanTool({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M399.47-118 129-515l26-24 177 126v-346h22v388L161-507l249 367h356v-608h22v630H399.47ZM477-506v-333h22v333h-22Zm145 0v-293h22v293h-22ZM499-323Z" />
    </svg>
  )
}
