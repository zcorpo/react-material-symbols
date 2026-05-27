import type { SVGProps, JSX } from 'react'

export default function ViewKanbanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M284-282h60v-397h-60v397Zm166-200h60v-197h-60v197Zm167 120h60v-317h-60v317ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
