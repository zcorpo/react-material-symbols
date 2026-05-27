import type { SVGProps, JSX } from 'react'

export default function ViewArray({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-480h84.62v480H160Zm149.23 0v-480h341.54v480H309.23Zm406.15 0v-480H800v480h-84.62ZM340-270.77h280v-418.46H340v418.46ZM480-480Z" />
    </svg>
  )
}
