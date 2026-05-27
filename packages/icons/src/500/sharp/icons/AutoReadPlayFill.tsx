import type { SVGProps } from 'react'

export default function AutoReadPlayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m407-411 221-149-221-148v297ZM74.02-74.02v-812.2h812.2v652.2h-652.2l-160 160Z" />
    </svg>
  )
}
