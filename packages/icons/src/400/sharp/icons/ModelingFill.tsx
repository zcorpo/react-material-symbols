import type { SVGProps } from 'react'

export default function ModelingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M718-145 569-295l149-150 42 43-76 77 196 1v60l-196-1 76 77-42 43ZM80-160v-267h389v267H80Zm162-357-42-42 76-78H80v-60h196l-76-77 42-42 149 149-149 150Zm249-16v-267h389v267H491Z" />
    </svg>
  )
}
