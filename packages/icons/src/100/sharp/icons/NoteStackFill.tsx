import type { SVGProps, JSX } from 'react'

export default function NoteStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M332-132v-496h496v326L658-132H332Zm474-186H642v164l164-164Zm-596 56-86-488 488-86 20 114H238.11v454.87L210-262Z" />
    </svg>
  )
}
