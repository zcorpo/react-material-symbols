import type { SVGProps, JSX } from 'react'

export default function VitalSigns({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M43.93-445.93v-68.14h219.7L363-280.72l232-579 148.63 345.65h172.44v68.14h-219.7L597-677.28l-233 579-147.63-347.65H43.93Z" />
    </svg>
  )
}
