import type { SVGProps, JSX } from 'react'

export default function Straighten({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M67-229.26v-501.48h826v501.48H67Zm79.22-79.78h667.56v-341.92H690V-480h-60v-170.96H510V-480h-60v-170.96H330V-480h-60v-170.96H146.22v341.92ZM270-480h60-60Zm180 0h60-60Zm180 0h60-60Zm-150 0Z" />
    </svg>
  )
}
