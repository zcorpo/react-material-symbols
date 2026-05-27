import type { SVGProps } from 'react'

export default function ResumeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M228.76-228.76v-502.48h68.13v502.48h-68.13Zm182.13 0L818.37-480 410.89-731.24v502.48Z" />
    </svg>
  )
}
