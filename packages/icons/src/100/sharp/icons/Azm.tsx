import type { SVGProps } from 'react'

export default function Azm({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-165v-287H165l296-296h287v287L452-165Zm159-190 115-115v-256H470L355-611h256v256ZM474-218l115-115v-256H333L218-474h256v256Z" />
    </svg>
  )
}
