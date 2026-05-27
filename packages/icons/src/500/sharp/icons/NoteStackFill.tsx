import type { SVGProps, JSX } from 'react'

export default function NoteStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M279.76-74.02v-606.22h606.46v404.64L684.07-74.02H279.76Zm540-236.31H649.67v169.85l170.09-169.85ZM169.54-193.24 63.59-790.46l597.45-105.95L688-740.48H219.76v538.28l-50.22 8.96Z" />
    </svg>
  )
}
