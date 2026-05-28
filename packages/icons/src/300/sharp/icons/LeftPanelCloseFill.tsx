import type { SVGProps, JSX } from 'react'

export default function LeftPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M644.15-354v-252L517.77-480l126.38 126ZM370.46-185.39h404.15v-589.22H370.46v589.22ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
