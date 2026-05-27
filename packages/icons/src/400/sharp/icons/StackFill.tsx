import type { SVGProps } from 'react'

export default function StackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-380v60H80v-560h560v180h-60v-120H140v440h120Zm60 300v-560h560v560H320Z" />
    </svg>
  )
}
