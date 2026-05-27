import type { SVGProps, JSX } from 'react'

export default function RangeHoodFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m144-430 188-188v-170h296v170l187 188H144Zm-12 218v-196h696v196H132Zm268-97h160v-22H400v22Z" />
    </svg>
  )
}
