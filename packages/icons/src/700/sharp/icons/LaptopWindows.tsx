import type { SVGProps } from 'react'

export default function LaptopWindows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-123v-72h150v-42H56v-629h849v629h-95v42h150v72H0Zm150-208h660v-440H150v440Zm0 0v-440 440Z" />
    </svg>
  )
}
