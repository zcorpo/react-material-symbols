import type { SVGProps, JSX } from 'react'

export default function AccountTreeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M598-92v-125H433v-432h-70v130H40v-350h323v125h235v-125h323v350H598v-130h-71v338h71v-130h323v349H598Z" />
    </svg>
  )
}
