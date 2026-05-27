import type { SVGProps } from 'react'

export default function ChatPasteGo2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m720-124-42-42 73-74H570v-60h181l-73-74 42-42 146 146-146 146Zm-600 4v-680h640v283q-10-2-20-2.5t-20-.5q-95 0-167.5 73T480-280q0 10 .5 20t2.5 20H240L120-120Z" />
    </svg>
  )
}
