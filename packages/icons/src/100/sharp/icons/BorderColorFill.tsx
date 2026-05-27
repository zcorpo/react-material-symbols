import type { SVGProps } from 'react'

export default function BorderColorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80 0v-44h800V0H80Zm132-249v-67l479-479 67 66-480 480h-66Zm461-427 53-53-34-35-53 53 34 35Z" />
    </svg>
  )
}
