import type { SVGProps, JSX } from 'react'

export default function FontDownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M253-240h80l43-117h208l42 117h81L521-720h-83L253-240Zm146-181 80-226h1l79 226H399ZM55-55v-851h851v851H55Z" />
    </svg>
  )
}
