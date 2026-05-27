import type { SVGProps, JSX } from 'react'

export default function MmsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M248.46-398.33h469.08L571-591.07l-126 167-92-113-104.54 138.74ZM74.02-74.02v-812.2h812.2v652.2h-652.2l-160 160Z" />
    </svg>
  )
}
