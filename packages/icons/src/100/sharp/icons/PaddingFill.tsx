import type { SVGProps, JSX } from 'react'

export default function PaddingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297-614h50v-50h-50v50Zm158 0h50v-50h-50v50Zm158 0h50v-50h-50v50ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
