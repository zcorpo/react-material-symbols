import type { SVGProps, JSX } from 'react'

export default function SettingsInputHdmiFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-132v-86L252-460v-209h40v-159h376v159h40v209L588-218v86H372Zm-58-537h91v-88h27v88h96v-88h27v88h91v-137H314v137Z" />
    </svg>
  )
}
