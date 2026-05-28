import type { SVGProps, JSX } from 'react'

export default function VideoFile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M317-240h245v-90l80 46v-152l-80 46v-90H317v240ZM135-55v-851h457l234 234.3V-55H135Zm407-570v-186H229v662h502v-476H542ZM229-811v186-186 662-662Z" />
    </svg>
  )
}
