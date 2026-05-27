import type { SVGProps, JSX } from 'react'

export default function UnknownMed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M72.83-445.93v-108.14H440v108.14H72.83Zm447.17 0v-108.14h367.17v108.14H520Z" />
    </svg>
  )
}
