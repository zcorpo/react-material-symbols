import type { SVGProps } from 'react'

export default function SubtitlesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h720v560H120Zm143.08-156.92h332.3v-30.77h-332.3v30.77Zm403.07 0h30.77v-30.77h-30.77v30.77ZM263.08-481.54h30.77v-30.77h-30.77v30.77Zm101.54 0h332.3v-30.77h-332.3v30.77Z" />
    </svg>
  )
}
