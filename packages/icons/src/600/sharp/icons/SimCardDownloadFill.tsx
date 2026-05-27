import type { SVGProps } from 'react'

export default function SimCardDownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m482-272.35 163.91-163.91-49.78-49.22-79.04 79.61v-191.74h-69.61v191.74l-79.05-79.61-49.78 49.22L482-272.35ZM145.87-65.87v-581.35L393.35-894.7H814.7v828.83H145.87Z" />
    </svg>
  )
}
