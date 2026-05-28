import type { SVGProps, JSX } from 'react'

export default function FormatImageInlineRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-30.77h640V-160H160Zm304.62-152.69v-335.39H800v335.39H464.62ZM160-769.23V-800h640v30.77H160Zm0 456.54v-30.77h203.08v30.77H160Z" />
    </svg>
  )
}
