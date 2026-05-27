import type { SVGProps } from 'react'

export default function ListArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M229-133 54-309l66-65 62 61v-470h95v470l61-61 66 65-175 176Zm247-44v-95h430v95H476Zm0-256v-94h430v94H476Zm0-255v-95h430v95H476Z" />
    </svg>
  )
}
