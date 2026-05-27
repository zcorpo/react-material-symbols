import type { SVGProps } from 'react'

export default function MedicationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-255.93h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM191.87-107.56v-615.51h576.5v615.51h-576.5Zm42.63-676.51v-68.37h491v68.37h-491Z" />
    </svg>
  )
}
