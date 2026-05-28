import type { SVGProps, JSX } from 'react'

export default function NewLabel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M482-212v-22h128l191-246-191-246H154v198h-22v-220h488.7L828-480 622-212H482Zm-4-268ZM246-172v-120H126v-22h120v-120h22v120h120v22H268v120h-22Z" />
    </svg>
  )
}
