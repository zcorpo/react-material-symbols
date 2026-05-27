import type { SVGProps } from 'react'

export default function ViewKanbanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M306-305h22v-350h-22v350Zm163-200h22v-150h-22v150Zm163 120h22v-270h-22v270ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
