import type { SVGProps, JSX } from 'react'

export default function AndroidCell4Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M35-135v-349h134v349H35Zm252 0v-455h134v455H287Zm252 0v-562h134v562H539Zm252 0v-690h135v690H791Z" />
    </svg>
  )
}
