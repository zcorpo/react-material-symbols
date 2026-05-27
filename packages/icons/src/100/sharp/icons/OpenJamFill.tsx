import type { SVGProps, JSX } from 'react'

export default function OpenJamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-184v-22h199v-373l94 94 17-17-122-122-122 122 17 17 94-94v205H132v-414h696v414H525v168h143v22H292Z" />
    </svg>
  )
}
