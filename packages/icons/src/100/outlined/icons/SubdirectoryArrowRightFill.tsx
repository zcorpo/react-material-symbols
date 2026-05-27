import type { SVGProps, JSX } from 'react'

export default function SubdirectoryArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m562-172-16-16 159-160H252v-400h22v378h432L546-529l16-16 186 186-186 187Z" />
    </svg>
  )
}
