import type { SVGProps } from 'react'

export default function MedicationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-243h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM166-68v-668h629v668H166Zm51-729v-95h526v95H217Z" />
    </svg>
  )
}
