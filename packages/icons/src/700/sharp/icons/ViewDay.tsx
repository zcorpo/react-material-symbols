import type { SVGProps, JSX } from 'react'

export default function ViewDay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M83-112v-95h794v95H83Zm0-194v-349h794v349H83Zm95-94h604v-160H178v160ZM83-754v-94h794v94H83Zm95 354v-160 160Z" />
    </svg>
  )
}
