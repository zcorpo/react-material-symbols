import type { SVGProps } from 'react'

export default function VideoTemplateFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-10v-165h771v165H95ZM55-220v-521h851v521H55Zm352-155 178-105-178-114v219ZM95-786v-164h771v164H95Z" />
    </svg>
  )
}
