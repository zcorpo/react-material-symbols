import type { SVGProps, JSX } from 'react'

export default function TaskFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m437-304 191-190-15-15-176 177-92-92-14 14 106 106ZM212-132v-696h380l156 156v540H212Zm369-530h145L581-806v144Z" />
    </svg>
  )
}
