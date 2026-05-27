import type { SVGProps } from 'react'

export default function TabMoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-252h85v167h600v-548H180v166H95v-304h771v771H95Zm365-169-66-66 76-77H95v-95h375l-76-76 66-67 191 191-191 190Z" />
    </svg>
  )
}
