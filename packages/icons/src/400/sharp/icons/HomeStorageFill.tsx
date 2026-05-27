import type { SVGProps, JSX } from 'react'

export default function HomeStorageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m200-120-80-480h720l-80 480H200Zm170-260h220v-60H370v60ZM210-660v-60h540v60H210Zm80-120v-60h380v60H290Z" />
    </svg>
  )
}
