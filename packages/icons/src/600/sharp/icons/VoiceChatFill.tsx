import type { SVGProps } from 'react'

export default function VoiceChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M241.52-530H290v-60h-48.48v60Zm104.52 80h48.48v-220h-48.48v220Zm110 78.87h48.48v-378.3h-48.48v378.3Zm110-78.87h48.48v-220h-48.48v220ZM670-530h48.48v-60H670v60ZM65.87-65.87V-894.7H894.7v668.83H225.87l-160 160Z" />
    </svg>
  )
}
