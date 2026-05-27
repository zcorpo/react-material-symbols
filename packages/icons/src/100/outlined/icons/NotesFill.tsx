import type { SVGProps } from 'react'

export default function NotesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-278v-22h376v22H172Zm0-191v-22h616v22H172Zm0-191v-22h616v22H172Z" />
    </svg>
  )
}
