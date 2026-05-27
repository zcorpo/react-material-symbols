import type { SVGProps } from 'react'

export default function AddTriangleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m40-160 440-760 440 760H40Zm410-140h60v-83h84v-60h-84v-84h-60v84h-84v60h84v83Z" />
    </svg>
  )
}
