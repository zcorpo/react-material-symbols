import type { SVGProps } from 'react'

export default function NoSimFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M826-242 275-792l114-114h437v664ZM876-6 640-242l49-50 137 135v102H135v-591l51-49L23-858l49-50L926-56 876-6Z" />
    </svg>
  )
}
