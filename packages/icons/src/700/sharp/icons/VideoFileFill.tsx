import type { SVGProps } from 'react'

export default function VideoFileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-851h457l234 234.3V-55H135Zm407-570h189L542-811v186ZM317-240h245v-90l80 46v-152l-80 46v-90H317v240Z" />
    </svg>
  )
}
