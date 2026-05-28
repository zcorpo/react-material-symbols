import type { SVGProps, JSX } from 'react'

export default function BookmarkManager({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-234v-492 492Zm-22 22v-536h253l74 74h372v74l-25 24v-76H451l-74-74H154v492h323l1-1v23H132Zm440 80v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM600-160h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z" />
    </svg>
  )
}
