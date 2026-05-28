import type { SVGProps, JSX } from 'react'

export default function ViewModuleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M621-495v-291h254v291H621Zm-261 0v-291h241v291H360Zm-274 0v-291h253v291H86Zm0 320v-290h253v290H86Zm274 0v-290h241v290H360Zm261 0v-290h254v290H621Z" />
    </svg>
  )
}
