import type { SVGProps, JSX } from 'react'

export default function LibraryAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M517-419h22v-124h124v-22H539v-124h-22v124H393v22h124v124ZM254-280v-548h548v548H254Zm-96 96v-516h22v494h494v22H158Z" />
    </svg>
  )
}
