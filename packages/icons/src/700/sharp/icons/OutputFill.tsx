import type { SVGProps } from 'react'

export default function OutputFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v174h-94v-79H189v582h583v-79h94v173H95Zm612-186-66-66 84-86H341v-94h384l-84-86 66-66 199 199-199 199Z" />
    </svg>
  )
}
