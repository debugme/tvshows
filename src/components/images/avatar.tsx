import { FC } from "react"

type AvatarProps = {
  className: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { className } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="156 68 110 150" className={className}>
      <g fill="#334155">
        <path d="M193.43 350.88c-29.36-2.05-58.8-11.79-81-31.15s-36.13-49.06-32.84-78.31 25.73-56.43 54.71-61.59c17.59-3.13 36.16 1.47 53.31-3.55 21.79-6.38 36.36-26.74 46.42-47.1s17.69-42.53 33.18-59.13c22.93-24.56 60.47-32.31 93-24C402 56.77 435.65 92 448 133.33s4.44 87.44-17.69 124.46-57.61 65.14-97.31 82.06"></path>
        <path d="M213.76 78.88C209 59.36 193.09 35.1 153.93 39.76 125.2 41 111.07 69 110.28 87.21s9.83 36 25.48 45.36c17.26 10.28 40.44 10.12 57.13-1.07s25.67-33.11 20.87-52.62z"></path>
      </g>
      <g>
        <path
          fill="#ffbe9d"
          d="M242 110.06l27.84 66-37.67 35.29c-2.57-4.63-11.16-23.21-11.16-23.21s-18.24 5.6-26.68-11.25c-4.1-8.18-11.18-25.77-17.39-41.69a34.88 34.88 0 0119.12-44.87A34.86 34.86 0 01242 110.06z"
        ></path>
        <path
          fill="#eb996e"
          d="M221 188.21s11.13-4.34 19-17c0 0 .7 14.74-16.95 21.43z"
        ></path>
        <path
          fill="#263238"
          d="M187.92 145.17a2.69 2.69 0 003.52 1.31 2.57 2.57 0 001.44-3.39 2.69 2.69 0 00-3.52-1.31 2.56 2.56 0 00-1.44 3.39zM184.85 142.27c.45.17 1.63-2.08 4.24-3.33s5.15-.89 5.27-1.34c.08-.21-.51-.63-1.63-.83a7.32 7.32 0 00-4.42.68 7 7 0 00-3.18 3.05c-.5 1-.5 1.7-.28 1.77zM213.07 134.3a2.69 2.69 0 003.52 1.3 2.56 2.56 0 001.44-3.39 2.69 2.69 0 00-3.52-1.31 2.58 2.58 0 00-1.44 3.4zM210.69 130.32c.46.17 1.63-2.07 4.24-3.33s5.15-.88 5.28-1.34c.07-.21-.51-.63-1.64-.83a7.33 7.33 0 00-4.42.68 7.17 7.17 0 00-3.18 3.05c-.5 1-.49 1.7-.28 1.77zM210.62 154.23c-.06-.15-1.82.36-4.6 1.29-.7.26-1.39.43-1.73 0a3.71 3.71 0 01-.51-2.18c-.16-1.92-.32-3.92-.49-6-.77-8.54-1.68-15.43-2-15.4s0 7 .77 15.52c.21 2.1.4 4.1.59 6a4.28 4.28 0 00.93 2.78 1.85 1.85 0 001.56.44 5.22 5.22 0 001.21-.39c2.65-1.12 4.33-1.9 4.27-2.06zM219.16 152.31c-.44.18.93 3-.51 6.2s-4.61 4.33-4.44 4.73c0 .2.94.23 2.23-.36a7.8 7.8 0 003.78-3.79 6.86 6.86 0 00.25-5.11c-.47-1.23-1.12-1.78-1.31-1.67zM205.06 120.44c.6.59 3-1 6.28-2.13s6.11-1.48 6.2-2.31c0-.39-.72-.85-2-1a11.47 11.47 0 00-9.5 3.38c-.96.95-1.25 1.78-.98 2.06zM182.15 134.27c.74.37 2.24-1.12 4.38-2.19s4.18-1.54 4.3-2.37c0-.39-.54-.84-1.61-1a7.09 7.09 0 00-7 3.67c-.46.97-.41 1.7-.07 1.89zM214.71 100.69h.13a14.82 14.82 0 019.14 6.22c.08.11.15.22.21.32 3 4.51 5.28 9.49 8.34 14s7.11 8.58 12.3 10.18c2.13.65 5.18.33 5.61-1.86A4.54 4.54 0 00250 127c-4.77-12.11-6.61-24-12.56-36.21a11.42 11.42 0 00-8.33-6.3c-3.45-.59-7.49-1-9.68 1.74s-3.32 9.87-4.43 13.2"
        ></path>
        <path
          fill="#ffbe9d"
          d="M240.15 120.79c.23-.27 10-9.1 15.23 2.67s-7.64 14.62-7.81 14.29-7.42-16.96-7.42-16.96z"
        ></path>
        <path
          fill="#eb996e"
          d="M249.17 131.68c0-.06.27 0 .69.06a2.27 2.27 0 001.54-.65c1-1 1.21-3.46.32-5.6a7.32 7.32 0 00-1.89-2.68 2.59 2.59 0 00-2.24-.89 1.14 1.14 0 00-1 1.1c0 .4.17.61.11.65s-.34-.08-.46-.61a1.43 1.43 0 01.13-.94 1.72 1.72 0 011-.81 3.17 3.17 0 013 .87 7.68 7.68 0 012.18 3c1 2.41.76 5.17-.72 6.42a2.48 2.48 0 01-2 .53c-.51-.13-.69-.41-.66-.45z"
        ></path>
        <path
          fill="#263238"
          d="M222.74 89.14c1.53-5.85-8.94-10.4-15.61-10.46s-13.77 5.35-19.21 9.2c-3.43 2.43-6.7 5.36-10.77 6.42a28.24 28.24 0 01-8.42.39 21 21 0 00-8.36.85c-2.63 1-5 3.28-5.23 6.09s2.25 5.79 5 5.34c-4-.83-8.17 3.14-7.55 7.16s5.8 6.54 9.35 4.55c-2.15-.8-4.17 2.22-3.29 4.34s3.36 3.11 5.64 3.38c5.82.69 11.6-1.86 16.37-5.27s8.85-7.71 13.54-11.24 12.47-9.67 18.33-9.42c4.31.18 8.46 4 10.34 2.34a7.88 7.88 0 002.21-6.73 23 23 0 00-2.38-6.94"
        ></path>
        <path
          fill="#455a64"
          d="M161.17 107.56s-.17.21-.43.63a3.75 3.75 0 00-.56 2 5.5 5.5 0 004.82 5.38 10.49 10.49 0 005.36-.74 21.27 21.27 0 005.39-3.3c3.47-2.85 6.41-6.89 9.53-11.06s6.52-8 10.51-10.29a16.87 16.87 0 016.09-2.17 15.57 15.57 0 015.62.2 16.32 16.32 0 017.26 3.56 11.5 11.5 0 012 2.19c-.05 0-.69-.82-2.16-2a16.55 16.55 0 00-7.19-3.35 15.62 15.62 0 00-5.49-.14 16.63 16.63 0 00-5.9 2.17c-3.88 2.27-7.21 6-10.33 10.18s-6.09 8.23-9.65 11.12a21.26 21.26 0 01-5.54 3.33 10.83 10.83 0 01-5.59.7 6.77 6.77 0 01-2.33-.86 5.37 5.37 0 01-1.6-1.54 5.58 5.58 0 01-1-3.35 3.73 3.73 0 01.67-2.11 2.45 2.45 0 01.52-.55zM200.47 83.65s.25-.17.75-.36a11.37 11.37 0 012.22-.51 12.55 12.55 0 0112.69 6.47 11.11 11.11 0 01.89 2.09 2.29 2.29 0 01.16.82c-.09 0-.4-1.12-1.37-2.72a13.44 13.44 0 00-5.26-4.92 13.29 13.29 0 00-7.07-1.36c-1.87.15-2.99.58-3.01.49zM241.84 101.84a2.27 2.27 0 01-.85.68 5.1 5.1 0 01-2.92.57 7.48 7.48 0 01-4.07-1.69 21.79 21.79 0 01-3.62-4 21.64 21.64 0 00-3.53-3.88 7.18 7.18 0 00-3.85-1.6 5.17 5.17 0 00-2.78.46c-.61.3-.89.57-.92.53s.22-.34.82-.72a5.13 5.13 0 012.9-.64 7.3 7.3 0 014.11 1.61 20.11 20.11 0 013.65 3.94 22.94 22.94 0 003.51 3.91 7.26 7.26 0 003.8 1.7 5.34 5.34 0 002.79-.37c.64-.28.93-.54.96-.5zM244.57 109.93s-.07.09-.25.21a8.19 8.19 0 01-.81.47 11.48 11.48 0 01-3.26 1.11 15.51 15.51 0 01-11-2.2 23 23 0 01-7.67-8.26 9.31 9.31 0 00-1-1.62 2.39 2.39 0 00-1.14-.77 1.89 1.89 0 00-1.18.06s.36-.42 1.23-.26a2.48 2.48 0 011.31.77 9.12 9.12 0 011.12 1.63 23.94 23.94 0 007.62 8 15.67 15.67 0 0010.62 2.29 17.78 17.78 0 004.41-1.43z"
        ></path>
        <path
          fill="#E7AD0B"
          d="M351.45 218.89c-15.45-17.7-38.38-39.21-58.78-42.89-4.12-.74-16.2-.33-19.79-.18l-4.41-6.72a2 2 0 00-3-.51l-39.2 29.71a2.49 2.49 0 00-.72 3.11l1.66 3.27-3.15 12a51.64 51.64 0 007.53 42.55l58.24 83.92 1 22.24c7.11 4.66 56.82 14 78.45 7.21 18.75-5.91 39.21-31.78 44.33-38.58a3.31 3.31 0 00.33-3.45c-6.33-12.95-45.08-91.73-62.49-111.68z"
        ></path>
        <path
          fill="#E7AD0B"
          d="M157.14 339.2l50.38-39.4s5.61-72.36 6-73.88c2.88-10.8 16.15-24.49 16.15-24.49l24.37 78.41-.74 17.79A48 48 0 01241.84 327l-.23.27A47.43 47.43 0 01228.05 338l-51.73 27.5z"
        ></path>
        <path

          d="M287.65 338.08a1.69 1.69 0 01-.19-.21l-.5-.62-1.91-2.44c-1.66-2.11-4-5.25-6.8-9.13-5.65-7.77-13.19-18.7-21.32-30.9s-15.32-23.36-20.48-31.47l-6-9.63-1.67-2.68c-.16-.28-.3-.51-.41-.69a.92.92 0 01-.12-.25s.06.07.17.22l.45.66 1.7 2.59 6.19 9.54c5.24 8.06 12.48 19.18 20.61 31.38s15.61 23.15 21.18 31c2.8 3.9 5.05 7.07 6.66 9.22l1.83 2.49.46.66q.17.25.15.26z"
        ></path>
        <path
          fill="#E7AD0B"
          d="M278.38 194l-4.12 109.6-83 39.93 7 25.34s44-1.18 81-12.81A68.55 68.55 0 00327 296.2c2.69-33.33 6.09-76.2 6-78.89-.22-4.42-37.13-29.71-54.62-23.31z"
        ></path>
        <path
          d="M372.54 336.48a4.42 4.42 0 01-.6.49l-1.79 1.31-1.31.94c-.48.32-1 .65-1.62 1-1.17.7-2.47 1.58-4 2.34l-2.4 1.25c-.84.43-1.76.79-2.68 1.21-1.84.87-3.89 1.57-6 2.35a81.52 81.52 0 01-14.46 3.31 80.68 80.68 0 01-14.84.4c-2.27-.22-4.43-.38-6.43-.77-1-.18-2-.3-2.9-.5l-2.63-.62c-1.7-.34-3.17-.87-4.48-1.26-.66-.21-1.27-.38-1.82-.58l-1.5-.58L301 346a7.75 7.75 0 01-.71-.32 3.88 3.88 0 01.75.22l2.09.73 1.5.54c.56.18 1.18.34 1.83.53 1.32.36 2.79.86 4.48 1.18l2.63.58c.92.2 1.89.31 2.89.47 2 .37 4.14.51 6.4.72a76.2 76.2 0 0029.11-3.69c2.13-.76 4.18-1.44 6-2.29.92-.41 1.83-.75 2.67-1.17l2.41-1.22c1.55-.73 2.86-1.58 4-2.26.59-.35 1.14-.66 1.64-1l1.32-.9 1.84-1.23a6.19 6.19 0 01.69-.41zM272.86 176.81s0 .05.05.15a1.94 1.94 0 01.07.46 5.47 5.47 0 01-.13 1.79 8.54 8.54 0 01-1.13 2.6 20.53 20.53 0 01-2.36 2.91 23.62 23.62 0 00-2.8 3.48 47.53 47.53 0 00-2.44 4.53 34 34 0 01-2.89 5 28.36 28.36 0 01-4.17 4.57 27.07 27.07 0 01-10.44 5.7 26.68 26.68 0 01-9.68.87 26 26 0 01-6.4-1.38c-.73-.27-1.28-.49-1.65-.67a2.21 2.21 0 01-.55-.29s.8.3 2.26.77a28.69 28.69 0 006.37 1.21 26.76 26.76 0 0019.74-6.57 28.18 28.18 0 004.1-4.48 34.32 34.32 0 002.88-4.89 44.23 44.23 0 012.51-4.57 23.22 23.22 0 012.89-3.49 22.46 22.46 0 002.39-2.82 8.7 8.7 0 001.17-2.49 7.33 7.33 0 00.21-2.39z"
        ></path>
        <path
          d="M230.85 208a33.49 33.49 0 0016.5 4 22.39 22.39 0 0015.37-6.62c4.42-4.7 6.3-11.49 11.2-15.7 1.55-1.33 3.55-2.72 3.49-4.76a3.52 3.52 0 00-2.93-3.12c-1.52-.29-3.37 1.3-4.65 2.17-4.36 2.94-5.15 7.73-7.66 12.36a23.78 23.78 0 01-13.49 11 29 29 0 01-17.52-.07M289.92 351.93c4.58 1.84 9.7-.21 14.2-2.24 0 0 16.1-6.5 24.25-29 3.77-10.43 7.11-21.11 7.11-32.2a109.66 109.66 0 00-5.48-32.71c-3.38 19.67.33 40.08-7.53 59.48a72.48 72.48 0 01-33 36.48M232.71 257.12l18.09 54.13s5-11.65 2.85-21.87zM309.86 348.9c8.21 4.49 17.3 5.6 26.66 5.38a91.59 91.59 0 0027.48-5.45c2.57-.89 5.42-2.14 6.3-4.71a2.61 2.61 0 00-.73-3.08c-.91-.58-2.11-.22-3.13.17-11.08 4.23-22.12 9.52-34 10a77.24 77.24 0 01-22.57-2.33"
          opacity="0.3"
        ></path>
        <path
          fill="#fafafa"
          d="M269.58 172.89a2.52 2.52 0 01-.24.51c-.2.38-.46.85-.78 1.43-.69 1.23-1.7 3-3 5.16s-2.95 4.68-5 7.35a50.8 50.8 0 01-7.39 8 35 35 0 01-9.26 5.71 27.73 27.73 0 01-8.64 2.08 21.59 21.59 0 01-6-.4 14 14 0 01-1.57-.42 2.43 2.43 0 01-.54-.19 26.75 26.75 0 008.06.64 28.09 28.09 0 008.48-2.15 35.51 35.51 0 009.11-5.66c5.81-5 9.67-10.93 12.39-15.14 1.35-2.12 2.41-3.87 3.15-5.07l.86-1.37a2.53 2.53 0 01.37-.48zM272.63 213.83a2 2 0 01-.39.36l-1.18.95c-1 .83-2.57 2-4.51 3.29s-4.31 2.85-7 4.42-5.74 3.14-9 4.64-6.47 2.75-9.41 3.78-5.64 1.83-7.92 2.42-4.14 1-5.44 1.25l-1.49.27a1.75 1.75 0 01-.53.06 2.09 2.09 0 01.51-.16l1.47-.37c1.28-.3 3.12-.77 5.38-1.41s4.93-1.47 7.86-2.51 6.09-2.32 9.35-3.8 6.28-3.07 9-4.59 5.08-3 7-4.3 3.52-2.38 4.59-3.15l1.24-.87a2 2 0 01.47-.28zM274.82 259.72a7.06 7.06 0 01-1.15.79c-.76.49-1.88 1.13-3.3 1.89a66.59 66.59 0 01-23.91 7.22c-1.6.16-2.9.24-3.79.25a6.91 6.91 0 01-1.4 0 7.61 7.61 0 011.38-.18c.89-.07 2.18-.21 3.77-.42a75.08 75.08 0 0023.78-7.18c1.43-.71 2.58-1.31 3.37-1.74a7 7 0 011.25-.63zM330.47 241.34a2.71 2.71 0 01-.51-.27l-1.4-.87-1-.63c-.37-.22-.79-.44-1.23-.69-.9-.47-1.88-1.07-3.05-1.59l-1.81-.86c-.63-.29-1.31-.54-2-.82-1.38-.6-2.91-1.08-4.5-1.61a59.41 59.41 0 00-21.64-2.52c-1.68.16-3.27.27-4.75.54-.74.12-1.46.2-2.14.35l-2 .42c-1.25.23-2.35.59-3.33.85-.48.14-.94.25-1.36.39l-1.12.38-1.56.52a3.42 3.42 0 01-.56.15 2.17 2.17 0 01.52-.25l1.53-.61 1.12-.43c.41-.15.86-.27 1.35-.43 1-.29 2.07-.67 3.33-.93l2-.46c.69-.15 1.41-.24 2.15-.38 1.49-.28 3.1-.41 4.79-.58a57.25 57.25 0 0121.81 2.53c1.61.55 3.14 1.05 4.52 1.67.7.29 1.38.55 2 .86l1.8.89c1.17.54 2.15 1.17 3 1.67.44.26.86.49 1.22.73l1 .67c.54.39 1 .7 1.35.95a2.29 2.29 0 01.47.36zM323.93 311.86s-.41-.69-1.16-1.93a33.25 33.25 0 00-3.64-4.89 45.11 45.11 0 00-16.46-11.31 97 97 0 00-19.44-5.34l-6-1.08-1.64-.3a2.49 2.49 0 01-.57-.15 3.65 3.65 0 01.59 0l1.65.21c1.44.19 3.52.49 6.07.92a89.73 89.73 0 0119.58 5.22 44 44 0 0116.54 11.54 30.29 30.29 0 013.54 5c.37.62.59 1.15.76 1.49a2.08 2.08 0 01.18.62zM269.69 357.56s-.1-.13-.24-.41-.34-.74-.57-1.23c-.49-1.07-1.17-2.63-2-4.58-1.59-3.9-3.62-9.36-5.49-15.5s-3.25-11.81-4.1-15.93c-.43-2.06-.75-3.74-.93-4.9-.09-.53-.16-1-.21-1.34a1.29 1.29 0 010-.47 1.79 1.79 0 01.14.45l.3 1.32 1.1 4.86c.94 4.09 2.37 9.72 4.23 15.85s3.84 11.6 5.34 15.52l1.81 4.64.48 1.27a2.62 2.62 0 01.14.45zM223 368.42a7.39 7.39 0 01-.85-1.16c-.52-.77-1.23-1.91-2-3.36a63.72 63.72 0 01-7.7-24.62c-.16-1.65-.23-3-.24-3.92a7.23 7.23 0 010-1.45 9.09 9.09 0 01.17 1.44c.06.92.19 2.25.4 3.89a70.94 70.94 0 007.65 24.48c.77 1.47 1.42 2.64 1.89 3.43a7.35 7.35 0 01.68 1.27zM218.05 327.29c-.09 0-.42-1.53-1.32-3.89a32.65 32.65 0 00-1.86-4 32.35 32.35 0 00-6.68-8.52 34.61 34.61 0 00-3.46-2.76c-2.09-1.44-3.51-2.13-3.47-2.22a4.53 4.53 0 011 .43 21.61 21.61 0 012.64 1.48 28.56 28.56 0 013.59 2.72 30.24 30.24 0 016.77 8.64 28.69 28.69 0 011.78 4.13 21.3 21.3 0 01.82 2.92 4.05 4.05 0 01.19 1.07zM251.28 284.76a10.06 10.06 0 01-1.49-.79c-.93-.55-2.3-1.29-4-2.16S242 280 239.58 279a81.55 81.55 0 00-7.87-2.61 79.79 79.79 0 00-8.11-1.7c-2.53-.36-4.81-.6-6.74-.7s-3.49-.16-4.57-.15a12.77 12.77 0 01-1.69-.06 9.18 9.18 0 011.68-.14c1.09-.07 2.66-.08 4.6 0a65.58 65.58 0 016.79.6 67.9 67.9 0 0116.09 4.33 63.23 63.23 0 016.17 2.9c1.71.92 3.07 1.72 4 2.32a10.14 10.14 0 011.35.97zM220.83 230a19.5 19.5 0 00-3.43.17 18.85 18.85 0 00-3.18 1.26 4.69 4.69 0 013.07-1.77 4.77 4.77 0 013.54.34zM185.62 363a5.94 5.94 0 01-.8-1.16l-2-3.26c-1.71-2.75-4.11-6.52-6.86-10.63s-5.34-7.76-7.23-10.39l-2.24-3.11a7.32 7.32 0 01-.78-1.18 7.25 7.25 0 01.94 1.05c.57.7 1.39 1.74 2.37 3 2 2.58 4.61 6.21 7.37 10.32s5.11 7.93 6.75 10.73c.82 1.4 1.46 2.55 1.89 3.35a8.71 8.71 0 01.59 1.28zM332.55 218.7s-.12-.67-.32-1.86a38.8 38.8 0 00-1.16-5 36.6 36.6 0 00-22.18-23.92 38.5 38.5 0 00-4.9-1.53c-1.18-.29-1.84-.42-1.84-.46a1.53 1.53 0 01.49 0c.32 0 .79.1 1.39.23a32.2 32.2 0 015 1.38 35.79 35.79 0 0122.42 24.16 32.55 32.55 0 011 5.08c.08.6.1 1.08.12 1.4a1.53 1.53 0 01-.02.52zM373 252.44a2.08 2.08 0 01-.31.43l-1 1.15c-.42.5-.95 1.1-1.59 1.77s-1.35 1.46-2.2 2.26a78.25 78.25 0 01-6.16 5.44 79.57 79.57 0 01-17.18 10.43 78.34 78.34 0 01-7.67 2.94c-1.11.39-2.13.65-3 .91s-1.66.45-2.3.6l-1.47.32a1.87 1.87 0 01-.52.08 1.63 1.63 0 01.49-.18l1.45-.42c.63-.17 1.39-.39 2.27-.68s1.9-.57 3-1c2.21-.75 4.78-1.77 7.59-3a96.23 96.23 0 008.85-4.68 92.59 92.59 0 008.23-5.68c2.42-1.91 4.52-3.72 6.2-5.33.87-.78 1.59-1.55 2.25-2.2s1.21-1.23 1.65-1.71l1-1.08a2.05 2.05 0 01.42-.37zM391.44 291.38s0 .09-.09.25l-.32.7c-.29.61-.68 1.53-1.29 2.67a77.69 77.69 0 01-5.64 9.31 82.42 82.42 0 01-10.5 12.27 81.95 81.95 0 01-33.92 19.74 83 83 0 01-15.86 3.08 78.41 78.41 0 01-10.88.3c-1.29 0-2.28-.15-2.95-.19l-.77-.07a.82.82 0 01-.26-.05h1.03c.68 0 1.67.1 3 .1a87 87 0 0010.84-.47 84.31 84.31 0 0015.75-3.17 85.23 85.23 0 0050-41c.64-1.11 1.05-2 1.38-2.61.14-.28.26-.5.36-.68a1.05 1.05 0 01.12-.18zM408.8 321.91a3.48 3.48 0 01-.17.31l-.52.9c-.25.38-.51.89-.9 1.43l-1.35 1.87a55.53 55.53 0 01-10.72 10c-2.48 1.87-5.27 3.8-8.25 5.9a104.93 104.93 0 00-9.17 7.1c-3.08 2.67-5.85 6-8.91 9.22s-6.55 6.47-11 8.37a39.45 39.45 0 01-13.5 3c-4.46.29-8.77.17-12.87.1a133.22 133.22 0 01-21.7-1.73 55.25 55.25 0 01-14-4.33L293.7 363c-.59-.3-1.06-.62-1.45-.85l-.89-.55a1.88 1.88 0 01-.29-.2 1.82 1.82 0 01.32.16l.91.5c.4.21.88.52 1.48.81l2.06 1a57.11 57.11 0 0014 4.16 137.09 137.09 0 0021.65 1.61c4.09.05 8.4.17 12.83-.13a39.33 39.33 0 0013.32-2.93c4.32-1.87 7.77-5 10.81-8.25s5.84-6.54 9-9.23a101.26 101.26 0 019.25-7.09c3-2.09 5.79-4 8.27-5.84a58 58 0 0010.78-9.84l1.39-1.84c.4-.53.67-1 .93-1.4s.42-.65.57-.86.15-.33.16-.32zM121.61 396a5.11 5.11 0 006.76-.44 4.43 4.43 0 011.09 3.16 14.81 14.81 0 00.19 3.4 2.81 2.81 0 002.28 2.25 2.66 2.66 0 002.37-1.5 7.88 7.88 0 00.7-2.87l.69-5.7c.49.81 1.18 1.72 2.12 1.66 1.15-.07 1.66-1.49 1.72-2.65s.07-2.52 1-3.16c.24.87 1.58 1 2.24.35a3.46 3.46 0 00.77-2.53 5.88 5.88 0 01.34-2.68l-9.35.65z"
        ></path>
        <path
          fill="#ffbe9d"
          d="M111.85 351a3.64 3.64 0 012.53-1.54c1.62-.19 4.22-.54 5.56-.85 2-.47 12.85-5.64 15.12-6.66a28.45 28.45 0 019.25-1.49c1.49.16 12.23-.62 12.23-.62l17 16.06s-6.68 17.93-14.54 21.8a162.82 162.82 0 00-15.77 9.13l-6.12 1.17s-11.6 8.67-14.64 8.09-3.77-1.88-3.77-1.88-3.75 2.16-5.73.24 0-4.81 0-4.81-3-.35-3.39-1.75a6.06 6.06 0 011.52-5.51c1.76-2 13.83-15.11 16.4-16.87s4.1-5 4.69-6.91-1.17-4.68-4.45-3.16-7 2.36-9.61 1.9c-3.86-.66-9.4-1.8-6.28-6.34z"
        ></path>
        <path
          fill="#eb996e"
          d="M142.64 376.65a13.31 13.31 0 01-1.35-.2 7.38 7.38 0 00-3.46.41l-.22.08-.08-.2a6.19 6.19 0 00-3.06-3.5 3.9 3.9 0 00-2.6-.12l-.45.15.12-.45a4.71 4.71 0 00-.11-2.67 9.13 9.13 0 00-1-2 14.13 14.13 0 00-.87-1.18 4 4 0 01-.35-.41c0-.07.7.38 1.47 1.41a7.89 7.89 0 011.12 2 5 5 0 01.2 3.03l-.33-.3a4.29 4.29 0 013 .09 5.13 5.13 0 012.13 1.71 8.46 8.46 0 011.15 2.11l-.3-.12a6.87 6.87 0 013.69-.26 3.36 3.36 0 011.3.42z"
        ></path>
        <path
          fill="#eb996e"
          d="M131.39 372.85a34.92 34.92 0 01-2.76 2.37c-1.72 1.44-4.06 3.46-6.54 5.81s-4.62 4.59-6.14 6.23a31.43 31.43 0 01-2.51 2.63 3.32 3.32 0 01.55-.81c.38-.51 1-1.21 1.69-2.07a85.58 85.58 0 016.06-6.36c2.49-2.36 4.88-4.35 6.66-5.72.89-.68 1.63-1.22 2.15-1.57a3.18 3.18 0 01.84-.51zM138.19 376.89a3.86 3.86 0 01-.78.65l-2.23 1.64c-1.89 1.37-4.5 3.26-7.31 5.45a52.12 52.12 0 00-6.81 6 19.65 19.65 0 00-2.1 3.1 2.63 2.63 0 01.33-1 11.54 11.54 0 011.49-2.36 42.64 42.64 0 016.77-6.16c2.82-2.2 5.47-4.05 7.42-5.34 1-.65 1.77-1.16 2.32-1.5a4.07 4.07 0 01.9-.48z"
        ></path>
        <path
          fill="#eb996e"
          d="M145.48 377.4a4.16 4.16 0 01-.88.77 26 26 0 01-2.67 1.75 30.45 30.45 0 01-4.31 2 34.9 34.9 0 01-5.6 1.46 5.26 5.26 0 00-2.54 1.22 2.51 2.51 0 00-.8 2.3 3.1 3.1 0 001.16 2 4.22 4.22 0 001.9.83 6.41 6.41 0 003-.32 10 10 0 011.09-.39 3.14 3.14 0 01-1 .58 6 6 0 01-3.18.49 4.51 4.51 0 01-2.11-.85 3.58 3.58 0 01-1.34-2.24 3 3 0 01.92-2.75 5.76 5.76 0 012.78-1.35 38.84 38.84 0 005.56-1.41 31.85 31.85 0 004.29-1.87c2.36-1.27 3.68-2.3 3.73-2.22z"
        ></path>
        <path
          fill="#ffbe9d"
          d="M191.21 343.54l6.48 23.56s-14.16 11.3-15 12a5.21 5.21 0 01-2.9 1.36c-.78-.07-2.07-1-3-1.23s-3.29-.52-3.93-.19a15.65 15.65 0 01-5 1.42c-2.2.19-6.72 3.48-9 2.06a4.91 4.91 0 01-2.44-3.37s4.48-1.8 5.14-3 4-6.29 4.4-7.45a29.81 29.81 0 00.51-4.84s-6.26.06-7.48.52-2.33 1.34-4.65 2.18-6.78 1.55-7.55 0-1-3.37-.65-3.86c0 0 4.78-5.23 5.81-6s13.42-6.65 16.14-8.07 12.66-8.41 23.1-5.11"
        ></path>
        <path
          fill="#eb996e"
          d="M191.21 343.54l-.24-.05-.69-.15c-.31-.07-.68-.18-1.14-.26l-1.58-.22a23.65 23.65 0 00-10.21 1.42 39.59 39.59 0 00-6.67 3.1c-2.29 1.41-4.93 2.66-7.69 4s-5.72 2.79-8.78 4.35A19.16 19.16 0 00152 357c-.64.56-1.26 1.21-1.88 1.85-1.25 1.3-2.5 2.65-3.76 4a2.63 2.63 0 00-.06 1.24 7.33 7.33 0 00.31 1.37c.07.22.16.44.25.66s.1.21.15.32.11.15.16.24a2.19 2.19 0 001.2.5 10.2 10.2 0 002.91-.09 15.77 15.77 0 002.92-.72 19 19 0 002.8-1.27c.46-.24.92-.5 1.41-.73a4.53 4.53 0 011.6-.43c2.14-.23 4.29-.28 6.48-.32h.27v.27a34.88 34.88 0 01-.37 4.24 4 4 0 01-.34 1.1c-.16.34-.34.66-.53 1-.36.64-.74 1.27-1.13 1.9l-1.46 2.35-.72 1.17-.35.59a2.7 2.7 0 01-.48.59 12.08 12.08 0 01-2.37 1.47c-.81.41-1.63.77-2.46 1.11l.16-.26a4.66 4.66 0 001.72 2.76 2.82 2.82 0 001.42.71 5 5 0 001.62-.13 20.43 20.43 0 003.17-1.16 12.39 12.39 0 013.26-1.09 13.67 13.67 0 003.16-.72 14.89 14.89 0 001.49-.59 3.36 3.36 0 011.69-.25 9.87 9.87 0 013.21.57c.49.22.95.47 1.41.68a2 2 0 001.34.29 6.17 6.17 0 002.53-1.41L185 377l4.45-3.55 8.09-6.44-.06.19-4.67-17.27c-.53-2-.95-3.6-1.24-4.7-.13-.52-.23-.92-.31-1.22a2.34 2.34 0 01-.09-.42 1.69 1.69 0 01.14.4l.36 1.21c.31 1.1.76 2.67 1.34 4.68 1.14 4.09 2.79 10 4.82 17.22v.12l-.09.08-8.05 6.47-4.43 3.57-2.26 1.8a6.82 6.82 0 01-2.74 1.52 1.72 1.72 0 01-.87 0 5.56 5.56 0 01-.75-.29c-.48-.22-.94-.47-1.41-.67a9.45 9.45 0 00-3-.52 2.84 2.84 0 00-1.47.2 16 16 0 01-1.54.62 14.34 14.34 0 01-3.28.74 12.38 12.38 0 00-3.1 1.06 21.29 21.29 0 01-3.25 1.2 5.74 5.74 0 01-1.81.14 3.46 3.46 0 01-1.67-.82 5 5 0 01-1.91-3.11v-.19l.19-.07c.81-.34 1.63-.71 2.42-1.11a11.16 11.16 0 002.25-1.39 1.87 1.87 0 00.38-.46l.35-.6.73-1.17 1.46-2.35c.38-.63.76-1.26 1.12-1.89a5.48 5.48 0 00.81-1.91 35 35 0 00.36-4.17l.26.27c-2.17 0-4.33.08-6.42.31a4.2 4.2 0 00-1.45.38c-.46.22-.92.47-1.38.72a21.07 21.07 0 01-2.87 1.3 16.92 16.92 0 01-3 .73 10.53 10.53 0 01-3.07.08 2.53 2.53 0 01-1.47-.64 2.79 2.79 0 01-.41-.71 6 6 0 01-.26-.71 7.1 7.1 0 01-.33-1.45 2.77 2.77 0 01.14-1.56c1.28-1.38 2.53-2.73 3.78-4 .64-.64 1.25-1.28 1.93-1.88a18 18 0 012.32-1.3c3.08-1.55 6-3 8.8-4.31s5.39-2.56 7.7-4a39.66 39.66 0 016.75-3.08 23.41 23.41 0 0110.32-1.29l1.59.25c.45.1.82.22 1.13.3l.68.2a.62.62 0 01.2.03z"
        ></path>
        <path
          fill="#eb996e"
          d="M155.44 361.48c-.15 0-.31-.91-.76-1.94s-1-1.79-.88-1.89.88.55 1.36 1.68a2.83 2.83 0 01.28 2.15zM176.73 374.81a4.64 4.64 0 01-.8 1.42 10.1 10.1 0 01-2.74 2.83 8.3 8.3 0 01-3.71 1.36 3.87 3.87 0 01-1.63 0 7.78 7.78 0 011.57-.34 9.83 9.83 0 003.48-1.43 12.86 12.86 0 002.74-2.62c.63-.79 1.03-1.26 1.09-1.22zM166.05 359.77a6 6 0 01.34 5.1 14.79 14.79 0 01-.12-2.55 16.17 16.17 0 01-.22-2.55zM164.49 361.13c.07-.12.79.25 1.25 1.09s.41 1.63.27 1.63-.32-.66-.73-1.38-.88-1.22-.79-1.34zM148.1 366.74c0-.07.31-.31.75-.78a3.52 3.52 0 001-2.2 2.47 2.47 0 00-.94-2.1c-.51-.39-.93-.43-.93-.51s.48-.16 1.13.2a2.38 2.38 0 01.9.91 2.68 2.68 0 01.36 1.53 3.41 3.41 0 01-1.26 2.44c-.56.44-.99.56-1.01.51z"
        ></path>
      </g>
    </svg>
  )
}
