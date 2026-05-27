import type { SVGProps, JSX } from 'react'

export default function Filter7Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-379h24l145-328v-22H436v22h161L452-379Zm-198 99v-548h548v548H254Zm-96 96v-516h22v494h494v22H158Z" />
    </svg>
  )
}
