import type { SVGProps, JSX } from 'react'

export default function Stylus({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M368-142 83-83l59-285 226 226Zm0 0L142-368l538-538 226 226-538 538Zm-22-112 426-426-92-92-426 426 92 92Z" />
    </svg>
  )
}
