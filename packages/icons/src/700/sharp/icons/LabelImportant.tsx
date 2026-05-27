import type { SVGProps } from 'react'

export default function LabelImportant({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-135 254-345L55-826h597l254 346-254 345H55Zm187-93h362l185-252-185-252H242l185 252-185 252Zm274-252Z" />
    </svg>
  )
}
