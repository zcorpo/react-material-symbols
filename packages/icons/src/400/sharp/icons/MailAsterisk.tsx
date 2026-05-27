import type { SVGProps } from 'react'

export default function MailAsterisk({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480Zm0-47 340-213H140l340 213ZM80-160v-640h800v406h-60v-286L480-463 140-680v460h406v60H80ZM711-45l-52-30 49-85h-98v-60h98l-49-85 52-30 49 85 49-85 52 30-49 85h98v60h-98l49 85-52 30-49-85-49 85Z" />
    </svg>
  )
}
