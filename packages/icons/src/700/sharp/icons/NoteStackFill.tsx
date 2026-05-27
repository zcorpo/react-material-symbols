import type { SVGProps } from 'react'

export default function NoteStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M279-55v-626h627v418.33L697-55H279Zm540-250H655v163l164-163ZM149-194 40-811l618-109 30 178H219v536l-70 12Z" />
    </svg>
  )
}
