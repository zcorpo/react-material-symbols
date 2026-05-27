import type { SVGProps } from 'react'

export default function BottomPanelClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-517.77 126-126.38H354l126 126.38ZM185.39-185.39h589.22v-139.69H185.39v139.69Zm0-185.07h589.22v-404.15H185.39v404.15Zm0 45.38v139.69-139.69ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
