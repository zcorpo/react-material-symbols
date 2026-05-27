import type { SVGProps } from 'react'

export default function ClarifyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272-312h222v-22H272v22Zm394 0h22v-336h-22v336ZM272-469h222v-22H272v22Zm0-157h222v-22H272v22ZM130-172v-616h700v616H130Z" />
    </svg>
  )
}
