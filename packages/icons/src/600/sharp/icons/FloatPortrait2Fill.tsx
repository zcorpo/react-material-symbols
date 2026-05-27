import type { SVGProps } from 'react'

export default function FloatPortrait2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M285.09-529.43h266.04v-225.48H285.09v225.48ZM814.7-65.87H145.87V-894.7H814.7v828.83Z" />
    </svg>
  )
}
