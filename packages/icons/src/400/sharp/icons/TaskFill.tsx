import type { SVGProps, JSX } from 'react'

export default function TaskFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m434-255 229-229-39-39-190 190-103-103-39 39 142 142ZM160-80v-800h421l219 219v581H160Zm391-554h189L551-820v186Z" />
    </svg>
  )
}
