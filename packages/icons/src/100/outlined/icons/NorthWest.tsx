import type { SVGProps, JSX } from 'react'

export default function NorthWest({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M732-212 274-670v309h-22v-347h347v22H290l458 458-16 16Z" />
    </svg>
  )
}
