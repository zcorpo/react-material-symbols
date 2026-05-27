import type { SVGProps, JSX } from 'react'

export default function GoToLineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M444.62-689.23V-760h70.76v70.77h-70.76Zm0 489.23v-70.77h70.76V-200h-70.76Z" />
    </svg>
  )
}
