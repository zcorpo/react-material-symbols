import type { SVGProps } from 'react'

export default function TopPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M354-315.85h252L480-442.23 354-315.85ZM185.39-185.39h589.22v-404.15H185.39v404.15ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
