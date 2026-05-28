import type { SVGProps, JSX } from 'react'

export default function LooksOne({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-305h22v-350H429v22h81v328Zm278 133H172v-616h616v616Zm-594-22h572v-572H194v572Zm0-572v572-572Z" />
    </svg>
  )
}
