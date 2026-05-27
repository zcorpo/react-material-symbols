import type { SVGProps } from 'react'

export default function ToolsFlatHead({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M303-80v-95h354v95H303Zm1-154-43-309 84-338h269l85 338-42 309H304Zm79-91h195l20-148H361l22 148Zm-23-242h240l-55-224H416l-56 224Zm218 242H383h195Z" />
    </svg>
  )
}
