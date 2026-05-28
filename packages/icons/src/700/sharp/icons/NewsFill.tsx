import type { SVGProps, JSX } from 'react'

export default function NewsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h547l224 224v547H95Zm493-676v183h183L588-771ZM271-297h418v-65H271v65Zm0-295h232v-66H271v66Zm0 148h418v-66H271v66Z" />
    </svg>
  )
}
