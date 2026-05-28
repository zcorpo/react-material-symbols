import type { SVGProps, JSX } from 'react'

export default function FilesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-220h420v-420h380v640H80Zm0-246v-314h314L80-406Zm119-34 241-241v241H199Z" />
    </svg>
  )
}
