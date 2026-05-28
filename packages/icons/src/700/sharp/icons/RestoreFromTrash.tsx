import type { SVGProps, JSX } from 'react'

export default function RestoreFromTrash({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M442-323h77v-193l73 79 55-54-166-167-167 167 55 54 73-79v193ZM158-95v-647h-58v-94h231v-48h297v48h232v94h-58v647H158Zm95-94h454v-553H253v553Zm0-553v553-553Z" />
    </svg>
  )
}
