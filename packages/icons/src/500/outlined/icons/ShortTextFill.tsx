import type { SVGProps } from 'react'

export default function ShortTextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-381.87V-450h399.05v68.13H154.02Zm0-128.13v-68.37h652.2V-510h-652.2Z" />
    </svg>
  )
}
