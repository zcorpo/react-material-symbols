import type { SVGProps } from 'react'

export default function MarkunreadMailbox({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-417v-124h-91v392h662v-392H360v-95h546v581H55v-581h185v-270h311v175H300v314h-60Zm-91-124v124-124 392-392Z" />
    </svg>
  )
}
