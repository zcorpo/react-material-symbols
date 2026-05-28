import type { SVGProps, JSX } from 'react'

export default function TabDuplicateFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M279-278v-550h549v550H279Zm-1 146v-34h34v34h-34ZM166-714h-34v-34h34v34Zm257 582v-34h34v34h-34Zm146 0v-34h34v34h-34Zm-437 0v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Zm0-146v-34h34v34h-34Zm582 403h34v34h-34v-34ZM540-682h266v-124H540v124Z" />
    </svg>
  )
}
