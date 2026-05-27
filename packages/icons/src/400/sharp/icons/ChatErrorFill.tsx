import type { SVGProps } from 'react'

export default function ChatErrorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-800h800v640H240L80-80Zm296-334 104-104 104 104 42-42-104-104 104-104-42-42-104 104-104-104-42 42 104 104-104 104 42 42Z" />
    </svg>
  )
}
