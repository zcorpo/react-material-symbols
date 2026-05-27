import type { SVGProps, JSX } from 'react'

export default function OutdoorGardenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M170-146h190v-567l-95-94-95 94v567Zm215 0h190v-567l-95-94-95 94v567Zm215 0h190v-567l-95-94-95 94v567Z" />
    </svg>
  )
}
