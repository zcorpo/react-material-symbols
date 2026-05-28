import type { SVGProps, JSX } from 'react'

export default function FastRewindFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M823.61-267.69 515.31-480l308.3-212.31v424.62Zm-378.92 0L136.39-480l308.3-212.31v424.62Z" />
    </svg>
  )
}
