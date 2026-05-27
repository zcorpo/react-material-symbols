import type { SVGProps } from 'react'

export default function ViewKanban({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M306-305h22v-350h-22v350Zm163-200h22v-150h-22v150Zm163 120h22v-270h-22v270ZM172-172v-616h616v616H172Zm22-22h572v-572H194v572Zm0 0v-572 572Z" />
    </svg>
  )
}
