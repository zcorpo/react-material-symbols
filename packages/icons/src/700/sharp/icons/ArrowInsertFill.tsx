import type { SVGProps, JSX } from 'react'

export default function ArrowInsertFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M711-221 316-616v353h-95v-514h515v94H383l394 395-66 67Z" />
    </svg>
  )
}
