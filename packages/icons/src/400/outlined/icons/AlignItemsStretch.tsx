import type { SVGProps, JSX } from 'react'

export default function AlignItemsStretch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290-250v-460h100v460H290Zm280 0v-460h100v460H570ZM80-820v-60h800v60H80Zm0 740v-60h800v60H80Z" />
    </svg>
  )
}
