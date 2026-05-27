import type { SVGProps, JSX } from 'react'

export default function AlignVerticalBottom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-60h800v60H80Zm210-160v-640h100v640H290Zm280 0v-400h100v400H570Z" />
    </svg>
  )
}
