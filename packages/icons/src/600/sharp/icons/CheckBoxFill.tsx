import type { SVGProps, JSX } from 'react'

export default function CheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m417.87-310.26 295.22-296.78-54.31-54.87L417.87-420 303.96-533.91l-54.31 54.87 168.22 168.78Zm-312 204.39V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
