import type { SVGProps } from 'react'

export default function HorizontalSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-220v-298.46h680V-220H140Zm0-363.85v-45.38h680v45.38H140Zm0-110.76V-740h680v45.39H140Z" />
    </svg>
  )
}
