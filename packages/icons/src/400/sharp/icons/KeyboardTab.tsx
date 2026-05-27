import type { SVGProps } from 'react'

export default function KeyboardTab({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-240v-480h60v480h-60Zm-340 1-43-42 169-169H80v-60h526L438-679l42-42 241 241-241 241Z" />
    </svg>
  )
}
