import type { SVGProps, JSX } from 'react'

export default function StackedInboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M161-246v-623h792v623H161Zm396.5-208q37.5 0 66.5-30.5t29-67.5h206v-222H256v222h205q0 37 29.5 67.5t67 30.5ZM750-92H7v-563h94v469h649v94Z" />
    </svg>
  )
}
