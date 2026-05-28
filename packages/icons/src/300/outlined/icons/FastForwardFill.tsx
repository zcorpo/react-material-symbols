import type { SVGProps, JSX } from 'react'

export default function FastForwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M134.77-267.69v-424.62L443.08-480 134.77-267.69Zm382.77 0v-424.62L825.84-480l-308.3 212.31Z" />
    </svg>
  )
}
