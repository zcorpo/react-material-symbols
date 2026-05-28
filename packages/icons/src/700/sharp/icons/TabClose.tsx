import type { SVGProps, JSX } from 'react'

export default function TabClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m473-407 84-84 84 84 67-66-84-84 84-84-67-67-84 84-84-84-66 67 84 84-84 84 66 66ZM192-192v-731h731v731H192Zm94-94h542v-542H286v542ZM37-37v-731h95v636h636v95H37Zm249-249v-542 542Z" />
    </svg>
  )
}
