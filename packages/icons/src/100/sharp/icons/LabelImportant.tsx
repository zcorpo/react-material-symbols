import type { SVGProps, JSX } from 'react'

export default function LabelImportant({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m132-212 215-268-215-269h479l217 269-216 268H132Zm44-22h426l199-246-199-247H176l198 247-198 246Zm313-247Z" />
    </svg>
  )
}
