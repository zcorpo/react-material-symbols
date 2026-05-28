import type { SVGProps, JSX } from 'react'

export default function DensitySmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-100v-45.39h680V-100H140Zm0-238.54v-45.38h680v45.38H140Zm0-237.54v-45.38h680v45.38H140Zm0-238.53V-860h680v45.39H140Z" />
    </svg>
  )
}
