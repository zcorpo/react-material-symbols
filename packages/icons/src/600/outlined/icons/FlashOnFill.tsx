import type { SVGProps } from 'react'

export default function FlashOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M387.56-39.3v-331.31H265.3V-893h431.66l-75.48 263.04h175.26L387.56-39.3Z" />
    </svg>
  )
}
