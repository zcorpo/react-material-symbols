import type { SVGProps, JSX } from 'react'

export default function Stylus({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m358-160-250 52 52-250 198 198Zm0 0L160-358l515-515 198 198-515 515Zm-12-73 442-442-113-113-442 442 113 113Z" />
    </svg>
  )
}
