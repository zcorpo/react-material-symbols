import type { SVGProps } from 'react'

export default function ViewQuiltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M386-493v-215h402v215H386Zm213 241v-216h189v216H599Zm-213 0v-216h188v216H386Zm-214 0v-456h189v456H172Z" />
    </svg>
  )
}
