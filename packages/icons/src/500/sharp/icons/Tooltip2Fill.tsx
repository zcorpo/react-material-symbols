import type { SVGProps, JSX } from 'react'

export default function Tooltip2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-400.91h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM480-74.02 373.37-234.37H74.02v-651.85h812.2v651.85H586.63L480-74.02Z" />
    </svg>
  )
}
