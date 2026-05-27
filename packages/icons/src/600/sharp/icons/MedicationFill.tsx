import type { SVGProps, JSX } from 'react'

export default function MedicationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-250.39h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM180.78-90.61v-638h599v638h-599Zm46.22-699v-79.78h506v79.78H227Z" />
    </svg>
  )
}
