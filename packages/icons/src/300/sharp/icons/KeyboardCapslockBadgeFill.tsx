import type { SVGProps, JSX } from 'react'

export default function KeyboardCapslockBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M304.39-307.31h351.22v-45.38H304.39v45.38ZM336-450.54l144-143.61 144 143.61 31.61-31.61-175.61-176-175.61 176L336-450.54ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
