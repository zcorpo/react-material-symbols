import type { SVGProps, JSX } from 'react'

export default function ChatBubbleOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M810-234v-577H263l-95-95h737v672h-95Zm50 222L658-215H215L55-55v-763l-36-35 49-52L911-62l-51 50ZM356-517Zm159-43ZM149-724v435l14-20h400L149-724Z" />
    </svg>
  )
}
