import type { SVGProps, JSX } from 'react'

export default function SubdirectoryArrowLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M394-95 135-357l257-258 68 67-145 146h376v-424h95v518H316l145 146-67 67Z" />
    </svg>
  )
}
