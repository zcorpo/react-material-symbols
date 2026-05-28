import type { SVGProps, JSX } from 'react'

export default function VoiceChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235-530h55v-60h-55v60Zm108 80h55v-220h-55v220Zm110 78h55v-377h-55v377Zm110-78h55v-220h-55v220Zm107-80h55v-60h-55v60ZM55-55v-851h851v691H215L55-55Z" />
    </svg>
  )
}
