import type { SVGProps, JSX } from 'react'

export default function HiveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m647-496-67-123 67-123h140l67 123-67 123H647ZM410-356l-67-124 67-124h140l67 124-67 124H410Zm0-278-67-123 67-123h140l67 123-67 123H410ZM173-496l-67-123 67-123h140l67 123-67 123H173Zm0 278-67-123 67-123h140l67 123-67 123H173ZM411-80l-68-123 67-123h140l67 123-67 123H411Zm236-138-67-123 67-123h140l67 123-67 123H647Z" />
    </svg>
  )
}
