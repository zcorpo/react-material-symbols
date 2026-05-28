import type { SVGProps, JSX } from 'react'

export default function ArtTrackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-200H40v-560h560v560Zm100 0v-560h60v560h-60Zm160 0v-560h60v560h-60ZM156-357h325L381-490l-85 110-60-82-80 105Z" />
    </svg>
  )
}
