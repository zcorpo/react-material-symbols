import type { SVGProps, JSX } from 'react'

export default function ViewHeadline({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M143-338v-94h674v94H143Zm0 195v-95h674v95H143Zm0-385v-95h674v95H143Zm0-195v-94h674v94H143Z" />
    </svg>
  )
}
