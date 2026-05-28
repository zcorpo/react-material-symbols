import type { SVGProps, JSX } from 'react'

export default function TopPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-334.69 116-116.77H364l116 116.77ZM190.77-190.77h578.46v-415.31H190.77v415.31ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
