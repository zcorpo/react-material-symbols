import type { SVGProps, JSX } from 'react'

export default function TableRowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M840-120H120v-200h720v200Zm0-260H120v-200h720v200Zm0-260H120v-200h720v200Z" />
    </svg>
  )
}
