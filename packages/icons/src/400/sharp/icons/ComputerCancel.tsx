import type { SVGProps, JSX } from 'react'

export default function ComputerCancel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m358-376 122-122 122 122 42-42-122-122 122-122-42-42-122 122-122-122-42 42 122 122-122 122 42 42ZM40-120v-60h880v60H40Zm40-120v-600h800v600H80Zm60-60h680v-480H140v480Zm0 0v-480 480Z" />
    </svg>
  )
}
