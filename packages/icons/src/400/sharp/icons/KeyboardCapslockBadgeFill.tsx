import type { SVGProps } from 'react'

export default function KeyboardCapslockBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M294-290h372v-60H294v60Zm42-164 144-144 144 144 42-42-186-186-186 186 42 42ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
