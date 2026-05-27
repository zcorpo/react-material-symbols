import type { SVGProps } from 'react'

export default function Timer1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M523.35-198.57v-480H314.02v-82.86h292.2v562.86h-82.87Z" />
    </svg>
  )
}
