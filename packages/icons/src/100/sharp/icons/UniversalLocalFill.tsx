import type { SVGProps, JSX } from 'react'

export default function UniversalLocalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm326-277.19q-9-9.2-9-22 0-12.81 9.19-21.81 9.2-9 22-9 12.81 0 21.81 9.19 9 9.2 9 22 0 12.81-9.19 21.81-9.2 9-22 9-12.81 0-21.81-9.19ZM480-324q63-53 94-99.41 31-46.4 31-84.48 0-59.11-38-93.61T480-636q-49 0-87 34.5t-38 93.61q0 38.08 31 84.48Q417-377 480-324Z" />
    </svg>
  )
}
