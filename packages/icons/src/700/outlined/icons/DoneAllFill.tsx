import type { SVGProps, JSX } from 'react'

export default function DoneAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-194 47-442l66-67 181 181 67 67-66 67Zm169-24L215-468l68-66 181 181 383-382 68 66-451 451Zm0-195-66-67 257-257 66 67-257 257Z" />
    </svg>
  )
}
