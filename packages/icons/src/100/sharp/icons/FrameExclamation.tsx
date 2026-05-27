import type { SVGProps } from 'react'

export default function FrameExclamation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-390v-314h22v314h-22Zm0 134v-22h22v22h-22ZM92-92v-155h22v133h133v22H92Zm621 0v-22h133v-133h22v155H713ZM92-713v-155h155v22H114v133H92Zm754 0v-133H713v-22h155v155h-22Z" />
    </svg>
  )
}
