import type { SVGProps, JSX } from 'react'

export default function TvDisplaysFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-327v-553h634v60H140v493H80ZM448-80v-80H240v-560h680v560H712v80H448Z" />
    </svg>
  )
}
