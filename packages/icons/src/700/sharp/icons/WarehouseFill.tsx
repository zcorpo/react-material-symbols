import type { SVGProps } from 'react'

export default function WarehouseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M57-97v-599l423-169 423 169v599H629v-297H331v297H57Zm324 0v-60h60v60h-60Zm69-120v-60h60v60h-60Zm69 120v-60h60v60h-60Z" />
    </svg>
  )
}
