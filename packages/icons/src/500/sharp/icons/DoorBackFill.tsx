import type { SVGProps, JSX } from 'react'

export default function DoorBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-68.13h80v-664.07h572.2v664.07h80v68.13h-732.2ZM417-459q10-10 10-24t-10-24q-10-10-24-10t-24 10q-10 10-10 24t10 24q10 10 24 10t24-10Z" />
    </svg>
  )
}
