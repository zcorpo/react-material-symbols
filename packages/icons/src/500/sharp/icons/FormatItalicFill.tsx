import type { SVGProps, JSX } from 'react'

export default function FormatItalicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M219.46-193.02v-88.37h135.19l137.33-403.98H334.65v-88.13h388.13v88.13H587.83L450.5-281.39h157.33v88.37H219.46Z" />
    </svg>
  )
}
