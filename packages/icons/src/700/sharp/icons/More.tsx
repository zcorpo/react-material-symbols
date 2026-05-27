import type { SVGProps, JSX } from 'react'

export default function More({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M311.3-135 55-480l255-346h597v691H311.3ZM172-480l186 252h455v-504H358L172-480Zm321 0Zm-156 50h100v-100H337v100Zm159-1 101 1 1-101-101-1-1 101Zm161 1h100v-100H657v100Z" />
    </svg>
  )
}
