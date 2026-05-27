import type { SVGProps } from 'react'

export default function FastRewindFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M775-312 527-480l248-168v336Zm-342 0L185-480l248-168v336Z" />
    </svg>
  )
}
