import type { SVGProps, JSX } from 'react'

export default function NoteAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-245.54h45.38v-126.69H630v-45.38H502.69v-127.31h-45.38v127.31H330v45.38h127.31v126.69ZM180-100v-760h405.23L780-665.23V-100H180Zm382.54-544.77h172.07L562.54-814.61v169.84Z" />
    </svg>
  )
}
