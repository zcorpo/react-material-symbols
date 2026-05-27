import type { SVGProps, JSX } from 'react'

export default function NoteStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M300-100v-560h560v371.74L671.54-100H300Zm514.61-214.31H645.69v168.92l168.92-168.92Zm-625.53 94.77L91.39-770.92l551.38-97.69 23.69 135.53H226.97v506.64l-37.89 6.9Z" />
    </svg>
  )
}
