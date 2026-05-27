import type { SVGProps, JSX } from 'react'

export default function ViewColumnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M86-175v-611h232v611H86Zm278 0v-611h233v611H364Zm278 0v-611h233v611H642Z" />
    </svg>
  )
}
