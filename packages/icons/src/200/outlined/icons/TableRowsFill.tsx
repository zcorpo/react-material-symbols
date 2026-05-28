import type { SVGProps, JSX } from 'react'

export default function TableRowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M800-160H160v-190h640v190Zm0-220.77H160v-198.46h640v198.46ZM800-610H160v-190h640v190Z" />
    </svg>
  )
}
