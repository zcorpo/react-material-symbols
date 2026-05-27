import type { SVGProps } from 'react'

export default function ChatPasteGo2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m720-158-16-15 92-93H589v-22h207l-92-93 16-15 119 119-119 119Zm-574-25v-591h588v254h-28q-93 0-159.5 66.5T480-294v28H229l-83 83Z" />
    </svg>
  )
}
