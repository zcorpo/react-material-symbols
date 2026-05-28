import type { SVGProps, JSX } from 'react'

export default function GMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M306-300v-360h291v22H328v316h264v-147H474v-22h140v191H306Z" />
    </svg>
  )
}
