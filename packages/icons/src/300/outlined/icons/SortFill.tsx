import type { SVGProps, JSX } from 'react'

export default function SortFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-260v-45.39h215V-260H140Zm0-197.31v-45.38h447.31v45.38H140Zm0-197.3V-700h680v45.39H140Z" />
    </svg>
  )
}
