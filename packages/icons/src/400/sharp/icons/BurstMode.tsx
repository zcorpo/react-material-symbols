import type { SVGProps } from 'react'

export default function BurstMode({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-200v-560h60v560H40Zm160 0v-560h60v560h-60Zm160 0v-560h560v560H360Zm60-60h440v-440H420v440Zm60-97h324L704-490l-84 110-61-82-79 105Zm-60 97v-440 440Z" />
    </svg>
  )
}
