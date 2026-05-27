import type { SVGProps } from 'react'

export default function FunctionsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-212v-13l244-255-244-255v-13h376v23H334l234 245-234 246h334v22H292Z" />
    </svg>
  )
}
