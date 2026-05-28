import type { SVGProps, JSX } from 'react'

export default function MoreUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M704.62-329.23v-375.39H340V-750h410v420.77h-45.38Zm-200 200v-375.39H140V-550h410v420.77h-45.38Z" />
    </svg>
  )
}
