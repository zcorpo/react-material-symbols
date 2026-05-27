import type { SVGProps } from 'react'

export default function LocalCafe({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-22h536v22H212Zm0-142v-474h616v202H685v272H212Zm22-22h429v-430H234v430Zm451-272h121v-158H685v158ZM234-336h429-429Z" />
    </svg>
  )
}
