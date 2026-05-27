import type { SVGProps, JSX } from 'react'

export default function ArrowMenuOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M412-172v-616h22v616h-22Zm133-185v-245l116 122-116 123Z" />
    </svg>
  )
}
