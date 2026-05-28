import type { SVGProps, JSX } from 'react'

export default function FileCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M230.77-190.77V-900h384.92L820-695.69v504.92H230.77ZM593-676.23h181.61L593-854.61v178.38ZM100-60v-628.61h45.39v583.22h462.22V-60H100Z" />
    </svg>
  )
}
