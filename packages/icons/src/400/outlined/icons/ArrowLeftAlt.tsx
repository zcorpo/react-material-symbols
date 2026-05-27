import type { SVGProps, JSX } from 'react'

export default function ArrowLeftAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-240 160-480l241-241 43 42-169 169h526v60H275l168 168-43 42Z" />
    </svg>
  )
}
