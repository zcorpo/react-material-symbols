import type { SVGProps, JSX } from 'react'

export default function ContentCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M232-192v-731h611v731H232ZM77-37v-731h95v636h516v95H77Z" />
    </svg>
  )
}
