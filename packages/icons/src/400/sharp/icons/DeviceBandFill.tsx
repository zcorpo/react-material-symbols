import type { SVGProps } from 'react'

export default function DeviceBandFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M323-80v-534h-40v-102h40v-164h315v164h41v102h-41v534H323Z" />
    </svg>
  )
}
