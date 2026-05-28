import type { SVGProps, JSX } from 'react'

export default function TableRowsNarrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-315h720v-135H120v135Zm0-195h720v-135H120v135Zm0-195h720v-135H120v135Zm720 585v-720 720Zm-720 0h720v-135H120v135Z" />
    </svg>
  )
}
