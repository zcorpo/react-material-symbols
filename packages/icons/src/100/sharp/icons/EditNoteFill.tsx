import type { SVGProps, JSX } from 'react'

export default function EditNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-403v-22h286v22H212Zm0-162v-22h449v22H212Zm0-161v-22h449v22H212Zm320 514v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z" />
    </svg>
  )
}
