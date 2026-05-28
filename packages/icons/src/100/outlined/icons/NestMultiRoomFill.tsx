import type { SVGProps, JSX } from 'react'

export default function NestMultiRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m212-574 268-202 268 202H212Zm0 402v-179h337v179H212Zm359 0v-179h177v179H571ZM212-373v-179h177v179H212Zm199 0v-179h337v179H411Z" />
    </svg>
  )
}
