import type { SVGProps, JSX } from 'react'

export default function LineStartSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M163-343h275v-275H163v275Zm369 95H68v-464h464v185h365v94H532v185ZM300-480Z" />
    </svg>
  )
}
