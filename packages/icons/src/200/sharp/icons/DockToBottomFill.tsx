import type { SVGProps, JSX } from 'react'

export default function DockToBottomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M190.77-353.92h578.46v-415.31H190.77v415.31ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
