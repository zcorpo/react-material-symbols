import type { SVGProps } from 'react'

export default function BoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-620l118-151h534l119 151v620H95Zm128-631h513l-36-46H259l-36 46Zm84 431 173-87 174 87v-344H307v344Z" />
    </svg>
  )
}
