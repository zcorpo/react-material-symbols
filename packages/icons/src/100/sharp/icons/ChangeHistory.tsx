import type { SVGProps, JSX } from 'react'

export default function ChangeHistory({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m174-212 306-490 306 490H174Zm39-22h534L480-661 213-234Zm267-213Z" />
    </svg>
  )
}
