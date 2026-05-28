import type { SVGProps, JSX } from 'react'

export default function DragHandleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-381.87V-450h652.2v68.13h-652.2Zm0-128.13v-68.37h652.2V-510h-652.2Z" />
    </svg>
  )
}
