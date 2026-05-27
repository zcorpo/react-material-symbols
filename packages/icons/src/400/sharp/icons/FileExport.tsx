import type { SVGProps, JSX } from 'react'

export default function FileExport({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480ZM201-79l-42-43 128-128H161v-60h228v228h-60v-125L201-79Zm248-1v-60h291v-460H520v-220H220v450h-60v-510h400l240 240v560H449Z" />
    </svg>
  )
}
