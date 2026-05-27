import type { SVGProps } from 'react'

export default function LeftPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M517.77-606v252l126.38-126-126.38-126ZM370.46-185.39h404.15v-589.22H370.46v589.22ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
