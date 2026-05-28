import type { SVGProps, JSX } from 'react'

export default function BookmarkCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m438-431.69 173-173.62-32-32-141 141.39-57-56.39-31.61 32L438-431.69ZM220-150v-673.84h520V-150L480-261.54 220-150Z" />
    </svg>
  )
}
