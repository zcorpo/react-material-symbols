import type { SVGProps, JSX } from 'react'

export default function GroupedBarChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-154.02v-491h145.26v491H154.02Zm215.26 0v-289.33h145.5v289.33h-145.5Zm291.44 0v-652.2h145.5v652.2h-145.5Z" />
    </svg>
  )
}
