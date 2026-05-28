import type { SVGProps, JSX } from 'react'

export default function DeleteForeverFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m363-289 117-118 118 118 60-60-117-119 117-119-60-61-118 119-117-119-60 61 117 119-117 119 60 60ZM158-95v-647h-58v-94h231v-48h297v48h232v94h-58v647H158Z" />
    </svg>
  )
}
