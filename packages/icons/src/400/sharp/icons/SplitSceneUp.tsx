import type { SVGProps, JSX } from 'react'

export default function SplitSceneUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-270h60v210h520v-210h60v270H160ZM80-450v-60h80v-330h640v330h80v60H80Zm660 270H220h520Z" />
    </svg>
  )
}
