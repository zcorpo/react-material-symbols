import type { SVGProps } from 'react'

export default function RightPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M442.23-354v-252L315.85-480l126.38 126ZM185.39-185.39h404.15v-589.22H185.39v589.22ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
