import type { SVGProps, JSX } from 'react'

export default function FastRewind({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M775-312 527-480l248-168v336Zm-342 0L185-480l248-168v336Zm-22-168Zm342 0ZM411-354v-253L223-480l188 126Zm342 0v-253L566-480l187 126Z" />
    </svg>
  )
}
