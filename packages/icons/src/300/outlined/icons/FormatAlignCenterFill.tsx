import type { SVGProps, JSX } from 'react'

export default function FormatAlignCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-45.39h680V-140H140Zm160-158.85v-45.38h360v45.38H300ZM140-457.31v-45.38h680v45.38H140Zm160-158.84v-45.39h360v45.39H300ZM140-774.61V-820h680v45.39H140Z" />
    </svg>
  )
}
