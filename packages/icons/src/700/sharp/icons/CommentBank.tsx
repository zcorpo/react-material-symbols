import type { SVGProps, JSX } from 'react'

export default function CommentBank({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M514-558v-253H149v548l40-46h622v-502H707v253l-96-50-97 50ZM55-55v-851h851v691H215L55-55Zm94-756v502-502Z" />
    </svg>
  )
}
