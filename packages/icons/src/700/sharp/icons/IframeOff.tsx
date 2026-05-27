import type { SVGProps } from 'react'

export default function IframeOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M846-25 736-135H55v-688h93v101L22-848l51-51L896-76l-50 51ZM149-229h492L240-631h-91v402Zm662-33v-369H443L248-826h658v658l-95-94Zm-77-78-87-87v-60h-60l-87-87h234v234Z" />
    </svg>
  )
}
