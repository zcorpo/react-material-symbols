import type { SVGProps } from 'react'

export default function Book({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-851h691v851H135Zm94-94h502v-662h-49v266l-97-56-97 56v-266H229v662Zm0 0v-662 662Zm259-396 97-56 97 56-97-56-97 56Z" />
    </svg>
  )
}
