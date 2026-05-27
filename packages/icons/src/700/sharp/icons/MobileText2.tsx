import type { SVGProps, JSX } from 'react'

export default function MobileText2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M329-491h300v-94H329v94Zm30 129h241v-94H359v94ZM175-15v-931h608v223h43v193h-43v515H175Zm94-93h420v-744H269v744Zm0 0v-744 744Z" />
    </svg>
  )
}
