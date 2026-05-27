import type { SVGProps, JSX } from 'react'

export default function FolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h273.31l70.77 70.77H840V-200H120Z" />
    </svg>
  )
}
