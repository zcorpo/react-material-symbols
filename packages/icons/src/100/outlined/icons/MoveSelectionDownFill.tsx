import type { SVGProps, JSX } from 'react'

export default function MoveSelectionDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290-132v-380h380v380H290Zm0-504v-34h34v34h-34Zm346 0v-34h34v34h-34ZM290-794v-34h34v34h-34Zm173 0v-34h34v34h-34Zm173 0v-34h34v34h-34Z" />
    </svg>
  )
}
