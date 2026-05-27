import type { SVGProps } from 'react'

export default function Docs({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m542-828 166 172v524H252v-696h290Zm-73 22H274v652h412v-427H469v-225Zm22 0v203h195v-44L533-806h-42ZM391-251v-22h105v22H391Zm0-143v-22h177v22H391Z" />
    </svg>
  )
}
