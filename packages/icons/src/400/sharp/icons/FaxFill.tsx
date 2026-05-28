import type { SVGProps, JSX } from 'react'

export default function FaxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-160v-640h400v200h160v440H320ZM80-120h210v-520H80v520Zm300-480h280v-140H380v140Zm30 320h140v-200H410v200Zm180-120h80v-80h-80v80Zm120 0h80v-80h-80v80ZM590-280h80v-80h-80v80Zm120 0h80v-80h-80v80Z" />
    </svg>
  )
}
