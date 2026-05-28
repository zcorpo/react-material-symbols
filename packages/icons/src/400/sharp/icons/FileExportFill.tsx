import type { SVGProps, JSX } from 'react'

export default function FileExportFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m201-79-42-43 128-128H161v-60h228v228h-60v-125L201-79Zm248-1v-290H160v-510h400l240 240v560H449Zm71-520h220L520-820l220 220-220-220v220Z" />
    </svg>
  )
}
