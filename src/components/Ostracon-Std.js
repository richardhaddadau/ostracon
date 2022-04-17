import React from "react";
import { Svg, Path, Rect } from "react-native-svg";

const Attach = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M119.44 373.54c-21.42-2.75-40.81-12.28-56.07-27.55-18.28-18.28-28.35-42.63-28.35-68.56s10.07-50.28 28.35-68.56l93.54-93.54c37.8-37.8 99.32-37.8 137.12 0 18.28 18.28 28.35 42.63 28.35 68.56s-10.07 50.28-28.35 68.56l-67.95 67.95c-6.84 6.84-6.84 17.93 0 24.77s17.93 6.84 24.77 0l67.95-67.95c24.89-24.89 38.6-58.04 38.6-93.33s-13.71-68.43-38.6-93.33c-51.46-51.46-135.19-51.46-186.65 0L38.6 184.1C13.71 209 0 242.14 0 277.43s13.71 68.43 38.6 93.33c20.79 20.79 47.2 33.77 76.37 37.52.76.1 1.51.14 2.26.14 8.68 0 16.21-6.45 17.35-15.28 1.23-9.59-5.54-18.37-15.14-19.6Z" />
      <Path d="M473.4 141.24c-20.79-20.79-47.2-33.77-76.37-37.52-9.59-1.24-18.37 5.54-19.6 15.14-1.23 9.59 5.54 18.37 15.14 19.6 21.42 2.75 40.81 12.28 56.07 27.55 37.8 37.8 37.8 99.32 0 137.12l-93.54 93.53c-37.8 37.8-99.32 37.8-137.12 0-18.28-18.28-28.35-42.63-28.35-68.56s10.07-50.28 28.35-68.56l67.95-67.95c6.84-6.84 6.84-17.93 0-24.77s-17.93-6.84-24.77 0l-67.95 67.95c-24.89 24.89-38.6 58.04-38.6 93.33s13.71 68.43 38.6 93.33c25.73 25.73 59.52 38.6 93.33 38.6 33.79 0 67.6-12.87 93.33-38.6l93.54-93.53c51.46-51.46 51.46-135.19 0-186.65Z" />
    </Svg>
  );
};
const Award = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="m477.57 391.01-52.68-91.25c16.6-28.69 26.11-62 26.11-97.53 0-107.7-87.3-195-195-195S61 94.54 61 202.24c0 35.53 9.51 68.84 26.11 97.53l-52.68 91.25c-12.98 22.48 4.33 50.35 30.24 48.68l34.71-2.24a32.502 32.502 0 0 1 31.22 18.03l15.42 31.18c11.51 23.27 44.3 24.33 57.28 1.85l52.7-91.28 52.7 91.28c12.98 22.48 45.77 21.42 57.28-1.85l15.42-31.18a32.51 32.51 0 0 1 31.22-18.03l34.71 2.24c25.9 1.67 43.22-26.2 30.24-48.68ZM256 42.24c88.22 0 160 71.78 160 160 0 30.18-8.4 58.44-22.99 82.56-.84 1.39-1.71 2.77-2.59 4.13-.08.12-.16.25-.25.37-.77 1.18-1.55 2.34-2.34 3.49-.17.25-.35.5-.52.76-.78 1.12-1.58 2.24-2.39 3.34l-.33.45c-1.88 2.54-3.84 5.02-5.86 7.44-.17.21-.35.41-.52.61-.86 1.02-1.74 2.03-2.63 3.03l-.51.57c-2.11 2.36-4.29 4.65-6.54 6.88-.12.12-.25.24-.37.36-.99.98-2 1.94-3.02 2.9-.19.18-.39.36-.58.54-1.09 1.01-2.2 2.01-3.32 2.99-.04.04-.08.07-.12.11-2.41 2.11-4.89 4.14-7.42 6.1-.18.14-.36.28-.54.41-1.13.87-2.28 1.72-3.44 2.56-.12.09-.25.18-.37.27-2.61 1.88-5.29 3.69-8.02 5.42l-.33.21c-1.25.79-2.51 1.56-3.79 2.31l-.45.27c-4.18 2.46-8.49 4.73-12.9 6.8-.14.06-.27.13-.41.19-4.46 2.08-9.02 3.96-13.69 5.63-.07.03-.15.05-.22.08-1.5.54-3.02 1.05-4.54 1.54-.07.02-.14.04-.2.07a158.16 158.16 0 0 1-14.59 3.92l-.26.06c-4.96 1.07-10 1.92-15.12 2.52-.07 0-.13.02-.2.02-5.15.6-10.38.95-15.66 1.05-.98.02-1.95.04-2.94.04s-1.96-.02-2.94-.04c-5.29-.1-10.51-.45-15.66-1.05-.07 0-.13-.02-.2-.02-5.12-.6-10.16-1.45-15.12-2.52l-.26-.06a158.16 158.16 0 0 1-14.59-3.92c-.07-.02-.14-.04-.2-.07-1.52-.49-3.04-1-4.54-1.54-.08-.03-.15-.05-.23-.08-3.15-1.13-6.26-2.35-9.31-3.66-1.47-.63-2.93-1.29-4.38-1.97-.14-.06-.27-.13-.4-.19-4.41-2.07-8.72-4.35-12.9-6.8-.15-.09-.3-.18-.46-.27-1.27-.75-2.53-1.52-3.78-2.3-.11-.07-.23-.14-.34-.21-2.73-1.73-5.4-3.53-8.01-5.42-.13-.09-.25-.18-.38-.27-1.16-.84-2.3-1.69-3.43-2.56l-.54-.42c-2.53-1.96-5.01-3.99-7.42-6.09-.04-.04-.09-.08-.13-.12-1.12-.98-2.22-1.98-3.32-2.99-.19-.18-.39-.36-.58-.54-1.02-.95-2.03-1.92-3.02-2.9-.12-.12-.25-.24-.37-.36-2.25-2.23-4.43-4.52-6.54-6.87-.17-.19-.34-.38-.51-.58-.89-1-1.76-2-2.62-3.02-.17-.21-.35-.41-.52-.62-2.02-2.42-3.98-4.9-5.86-7.43-.11-.15-.22-.3-.33-.46-.81-1.1-1.61-2.21-2.39-3.34-.18-.25-.35-.5-.53-.76-.79-1.15-1.58-2.32-2.34-3.49-.08-.13-.17-.25-.25-.38-.88-1.36-1.75-2.74-2.59-4.13-14.59-24.12-22.99-52.37-22.99-82.56 0-88.22 71.78-160 160-160Zm-80.67 424.73-13.35-27c-11.46-23.18-34.64-37.58-60.5-37.58-1.45 0-2.91.05-4.35.14l-30.05 1.94 42.45-73.53c27.72 31.52 65.45 54.03 108.23 62.53l-42.43 73.49Zm239.55-64.44a70.21 70.21 0 0 0-4.35-.14c-25.85 0-49.04 14.4-60.5 37.58l-13.35 27-42.43-73.49c42.78-8.51 80.51-31.01 108.23-62.53l42.45 73.53-30.06-1.94Z" />
      <Path d="m164.08 189.58 31.24 23.69c5.42 4.11 7.7 11.15 5.74 17.65l-11.35 37.53c-4.46 14.75 12.19 26.84 24.84 18.04l32.18-22.39a16.252 16.252 0 0 1 18.56 0l32.18 22.39c12.65 8.8 29.3-3.3 24.84-18.04l-11.35-37.53a16.23 16.23 0 0 1 5.74-17.65l31.24-23.69c12.28-9.31 5.92-28.88-9.49-29.2l-39.2-.8c-6.8-.14-12.79-4.49-15.02-10.91l-12.87-37.03c-5.06-14.55-25.64-14.55-30.7 0l-12.87 37.03a16.247 16.247 0 0 1-15.02 10.91l-39.2.8c-15.4.31-21.76 19.89-9.49 29.2Z" />
    </Svg>
  );
};
const Bell = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="m465.12 328.26-26.27-41.23a129.96 129.96 0 0 1-20.36-69.85v-20.63c0-68.1-41.51-127.06-100.71-151.73C309.3 18.81 284.85 0 256 0s-53.19 18.72-61.73 44.65C135.14 68.95 93.5 127.11 93.5 195v22.18c0 24.75-7.06 48.98-20.36 69.85l-26.27 41.23c-22.44 35.22-6.27 82.02 33.02 96.16a516.832 516.832 0 0 0 84.12 22.46C177.36 484.81 213.5 512 256 512s78.63-27.19 91.99-65.12a516.832 516.832 0 0 0 84.12-22.46c39.29-14.14 55.46-60.94 33.02-96.16ZM256 477c-20.1 0-38-9.54-49.44-24.33C222.83 454.2 239.32 455 256 455s33.16-.79 49.44-2.33C294 467.46 276.1 477 256 477Zm182.69-104.21c-2.98 8.74-9.71 15.56-18.44 18.7a481.403 481.403 0 0 1-74.93 20.28l-1.3.24c-2.41.44-4.83.87-7.25 1.28-.94.16-1.89.31-2.83.46-2.03.33-4.07.66-6.11.96-1.68.25-3.36.48-5.03.71-1.45.2-2.89.41-4.34.6-20.61 2.65-41.45 3.98-62.46 3.98s-41.85-1.33-62.46-3.98c-1.45-.19-2.89-.4-4.34-.6-1.68-.23-3.36-.46-5.03-.71-2.04-.3-4.08-.63-6.11-.96-.94-.15-1.88-.3-2.82-.46-2.42-.41-4.84-.83-7.25-1.28l-1.3-.24c-2.7-.5-5.39-1.03-8.08-1.57-22.67-4.62-45-10.85-66.85-18.71-8.73-3.14-15.45-9.96-18.44-18.7-1.73-5.08-3.64-15.17 3.08-25.73l26.27-41.23a164.687 164.687 0 0 0 25.84-88.65V195c0-47.72 26.35-89.39 65.26-111.24 4.57-2.57 9.31-4.86 14.21-6.86.07-.03.13-.05.2-.08 3.6-1.46 7.28-2.76 11.03-3.9.18-.05.35-.1.53-.16 1.09-.32 2.18-.63 3.28-.93.16-.04.32-.09.48-.13 2.48-.65 4.98-1.23 7.51-1.74.25-.05.5-.1.75-.14.99-.19 1.99-.37 2.99-.54.32-.05.64-.11.97-.16 1.05-.17 2.1-.32 3.16-.47l.62-.09c1.26-.16 2.53-.31 3.8-.44.25-.03.51-.04.76-.07 1-.09 2.01-.18 3.02-.25.4-.03.81-.05 1.21-.08.91-.05 1.83-.1 2.74-.13.38-.01.77-.03 1.15-.04 1.27-.04 2.55-.06 3.83-.06 1.28 0 2.56.03 3.83.07.38.01.77.03 1.15.05.92.04 1.83.08 2.74.14.41.02.81.05 1.21.08 1 .07 2 .15 3 .25.26.02.52.04.78.07 1.27.13 2.54.28 3.8.44l.61.09c1.06.15 2.11.3 3.17.47.32.05.65.11.97.16 1 .17 1.99.35 2.98.55l.77.15c2.53.51 5.03 1.1 7.51 1.76.15.04.3.08.46.13 1.1.3 2.2.61 3.29.94.18.05.35.11.53.16 3.75 1.15 7.43 2.46 11.03 3.94.06.02.12.05.18.07 4.89 2.02 9.64 4.34 14.21 6.93 38.95 22.12 65.31 64.31 65.31 112.61v20.63c0 31.46 8.94 62.12 25.84 88.65l26.27 41.23c6.72 10.55 4.82 20.65 3.08 25.73Z" />
    </Svg>
  );
};
const Bookmark = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M386 162.5H126c-17.95 0-32.5 14.55-32.5 32.5v284.44c0 28.95 35.01 43.45 55.48 22.98l61.06-61.06c25.38-25.38 66.54-25.38 91.92 0l61.06 61.06c20.47 20.47 55.48 5.97 55.48-22.98V195c0-17.95-14.55-32.5-32.5-32.5Zm-2.5 310.9-56.79-56.79c-18.89-18.89-44-29.29-70.71-29.29s-51.82 10.4-70.71 29.29L128.5 473.4V197.5h255v275.9ZM353.5 0h-195c-35.9 0-65 29.1-65 65v32.5c0 17.95 14.55 32.5 32.5 32.5h260c17.95 0 32.5-14.55 32.5-32.5V65c0-35.9-29.1-65-65-65Zm30 95h-255V65c0-16.54 13.46-30 30-30h195c16.54 0 30 13.46 30 30v30Z" />
    </Svg>
  );
};
const Clap = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M493.38 273.88c-3.26-3.26-6.9-5.98-10.83-8.14 6.76-8.48 10.44-18.91 10.44-29.91 0-12.85-5-24.92-14.09-34.01a48.382 48.382 0 0 0-11.21-8.36c13.13-18.75 11.34-44.84-5.4-61.57-16.74-16.74-42.84-18.52-61.59-5.38a48.046 48.046 0 0 0-8.34-11.22c-9.08-9.08-21.16-14.09-34.01-14.09s-24.92 5-34.01 14.09l-6.86 6.86a48.046 48.046 0 0 0-8.34-11.22c-9.08-9.08-21.16-14.09-34.01-14.09s-24.92 5-34.01 14.09l-30.96 30.96a43.476 43.476 0 0 0-13.22-3.96c-20.62-2.77-39.55 9.09-46.04 28.86l-17.05 51.91 16.23-49.4c-2.76-18.72-17.18-33.14-36.36-35.72-20.62-2.77-39.55 9.09-46.04 28.86L29.51 278.62a136.093 136.093 0 0 0-3.09 74.1 136.161 136.161 0 0 0 36.19 64.74l37.49 37.49c25.73 25.73 59.94 39.9 96.33 39.9 11.91 0 23.58-1.53 34.8-4.47 15.26 5.79 31.61 8.82 48.42 8.82 36.39 0 70.6-14.17 96.33-39.9l117.4-117.4c9.08-9.08 14.09-21.16 14.09-34.01 0-12.85-5-24.92-14.09-34.01ZM232.4 169.15l33.47-33.47c2.47-2.47 5.76-3.84 9.26-3.84s6.79 1.36 9.26 3.84c5.1 5.1 5.11 13.41 0 18.52l-47.14 47.14c-.26-.02-.55-.07-.87-.19-1.52-.58-1.57-1.72-1.6-2.21l-1.05-21.02c-.15-3.03-.61-5.96-1.33-8.77Zm6.38 31.67c-.32.27-.81.55-1.53.51.72.04 1.21-.25 1.53-.51Zm-55.87 258.07c-21.25-2.84-41.77-12.4-58.07-28.7L87.35 392.7c-27.16-27.16-36.58-66.69-24.59-103.17l38.17-116.18c1.69-5.15 5.82-5.4 8.12-5.09 2.31.31 6.22 1.64 6.49 7.06l1.05 21.01c.58 11.63 6.24 21.85 15.27 28.38l-19.14 58.25a136.093 136.093 0 0 0-3.09 74.1 136.161 136.161 0 0 0 36.19 64.74l37.48 37.49-.4-.4Zm285.71-141.74-117.4 117.4c-19.12 19.12-44.54 29.65-71.58 29.65s-52.46-10.53-71.58-29.65l-37.48-37.49c-27.16-27.16-36.58-66.69-24.59-103.17l38.17-116.18c1.69-5.15 5.82-5.4 8.12-5.09 2.31.31 6.22 1.64 6.49 7.06l1.05 21.01c.75 15.02 9.94 27.71 23.97 33.12 14.04 5.4 29.36 2.16 40-8.48l85.29-85.29c2.47-2.47 5.76-3.84 9.26-3.84s6.79 1.36 9.26 3.84c5.1 5.1 5.11 13.41 0 18.51l-92.27 92.27c-6.83 6.83-6.83 17.91 0 24.75s17.92 6.83 24.75 0l10.7-10.7 81.56-81.56h.01L419 156.65c5.11-5.11 13.41-5.11 18.52 0 5.11 5.11 5.11 13.41 0 18.52l-26.66 26.66-41.5 41.5-50.76 50.76c-6.83 6.83-6.83 17.91 0 24.75 3.42 3.42 7.9 5.13 12.37 5.13s8.96-1.71 12.37-5.13l50.76-50.76 41.5-41.5c5.1-5.11 13.41-5.11 18.52 0 5.11 5.11 5.11 13.41 0 18.52l-41.5 41.5-50.76 50.76c-6.83 6.83-6.83 17.91 0 24.75s17.91 6.83 24.75 0l63.47-63.47c2.47-2.47 5.76-3.83 9.26-3.83s6.79 1.36 9.26 3.84c2.47 2.47 3.83 5.76 3.83 9.26s-1.36 6.79-3.84 9.26ZM375.85 71.69c1.52.41 3.04.6 4.54.6 7.73 0 14.8-5.16 16.89-12.98l8.41-31.39c2.5-9.34-3.04-18.93-12.37-21.43-9.34-2.5-18.93 3.04-21.43 12.37l-8.41 31.39c-2.5 9.34 3.04 18.93 12.37 21.43ZM408.35 95.8c3.24 5.61 9.12 8.75 15.17 8.75 2.97 0 5.98-.76 8.73-2.35l28.15-16.25c8.37-4.83 11.24-15.54 6.41-23.91-4.83-8.37-15.54-11.24-23.91-6.41l-28.15 16.25c-8.37 4.83-11.24 15.54-6.41 23.91ZM311.75 69.91c3.24 5.61 9.12 8.75 15.17 8.75 2.97 0 5.98-.76 8.73-2.35 8.37-4.83 11.24-15.54 6.41-23.91l-16.25-28.15c-4.83-8.37-15.53-11.24-23.91-6.41-8.37 4.83-11.24 15.54-6.41 23.91l16.25 28.15Z" />
    </Svg>
  );
};
const Comment = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M382 0H130C58.2 0 0 58.2 0 130v162.5c0 71.8 58.2 130 130 130h5.96c19.34 0 37.68 8.61 50.03 23.5l44.99 54.24c13 15.67 37.03 15.67 50.03 0L326 446a64.998 64.998 0 0 1 50.03-23.5h5.96c71.8 0 130-58.2 130-130V130C512 58.2 453.8 0 382 0Zm95 292.5c0 52.38-42.62 95-95 95h-5.96c-29.86 0-57.91 13.18-76.97 36.16L256 475.58l-43.07-51.92c-19.06-22.98-47.11-36.16-76.97-36.16H130c-52.38 0-95-42.62-95-95V130c0-52.38 42.62-95 95-95h252c52.38 0 95 42.62 95 95v162.5Z" />
      <Path d="M100 148.75h130c9.67 0 17.5-7.83 17.5-17.5s-7.83-17.5-17.5-17.5H100c-9.67 0-17.5 7.83-17.5 17.5s7.83 17.5 17.5 17.5ZM412 193.75H100c-9.67 0-17.5 7.83-17.5 17.5s7.83 17.5 17.5 17.5h312c9.67 0 17.5-7.83 17.5-17.5s-7.83-17.5-17.5-17.5ZM412 273.75H100c-9.67 0-17.5 7.83-17.5 17.5s7.83 17.5 17.5 17.5h312c9.67 0 17.5-7.83 17.5-17.5s-7.83-17.5-17.5-17.5Z" />
    </Svg>
  );
};
const Ellipse = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M256 191c-35.9 0-65 29.1-65 65s29.1 65 65 65 65-29.1 65-65-29.1-65-65-65Zm0 95c-16.54 0-30-13.46-30-30s13.46-30 30-30 30 13.46 30 30-13.46 30-30 30ZM421 191c-35.9 0-65 29.1-65 65s29.1 65 65 65 65-29.1 65-65-29.1-65-65-65Zm0 95c-16.54 0-30-13.46-30-30s13.46-30 30-30 30 13.46 30 30-13.46 30-30 30ZM91 191c-35.9 0-65 29.1-65 65s29.1 65 65 65 65-29.1 65-65-29.1-65-65-65Zm0 95c-16.54 0-30-13.46-30-30s13.46-30 30-30 30 13.46 30 30-13.46 30-30 30Z" />
    </Svg>
  );
};
const Flame = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M354.77 61.89c-16.79-14.23-34.4-29.19-52.33-45.5A63.003 63.003 0 0 0 251.69.56a60.71 60.71 0 0 0-43.36 27.74 434.78 434.78 0 0 0-53.18 137.62c-3.83-5.53-7.22-11.34-10.16-17.39-10.11-21.3-35.56-30.36-56.86-20.26-5.16 2.45-9.77 5.9-13.56 10.16a193.512 193.512 0 0 0-55.19 137.03c-1.02 107.57 71.34 202.01 175.46 229.03 19.37 4.87 39.26 7.4 59.24 7.51.64 0 7.45-.06 10.2-.26 127.4-4.13 228.5-108.68 228.34-236.15-.09-96.67-63.94-150.88-137.86-213.7Zm46.36 353.7c-36.5 37.75-85.5 59.47-137.98 61.17l-.65.02-.65.04c-1.26.08-5.81.16-7.73.17a213.89 213.89 0 0 1-50.62-6.42c-88.67-23.07-150-103.15-149.13-194.78v-.64c-.37-42.21 15.68-82.07 45.2-112.24l.57-.59.39-.44c.69-.78 1.51-1.46 2.44-1.92 1.1-.55 2.25-.82 3.41-.82 2.36 0 5.43 1.16 6.97 4.4l.13.26c3.61 7.51 7.8 14.72 12.55 21.57l3.68 5.31c16.32 23.57 52.94 16 58.58-12.1l1.16-5.77c8.96-44.61 25.32-87.04 48.64-126.11 4.1-6.3 10.71-10.47 18.18-11.46 1.29-.17 2.54-.26 3.78-.26 6.98 0 13.67 2.59 18.83 7.29 18.99 17.27 37.98 33.37 53.25 46.3l.1.09c35.16 29.89 68.38 58.11 91.23 88.48 23.59 31.35 34.13 61.72 34.16 98.47.07 52.52-20 102.22-56.5 139.97Z" />
      <Path d="M254.12 356.99c-7.03-.1-14.05-1-20.88-2.68l-.24-.06c-7.67-2.07-8.77-12.45-1.83-16.33 33-18.44 57.7-50.64 65.52-89.58l2.06-10.24c1.42-7.09 10.24-9.68 15.25-4.47s9.84 10.7 13.58 15.67c9.34 12.41 10.04 18.52 10.05 26.42.05 36.42-23.84 69.39-64.1 80.39-.68.19-1.39.29-2.1.31l-15.04.49-.69.05c-.51 0-1.08.02-1.57.03Z" />
    </Svg>
  );
};
const Globe = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path
        className="b"
        d="M420.67 350.61c-37.52 30.27-83 46.27-131.54 46.27-56.09 0-108.83-21.84-148.49-61.51-39.66-39.67-61.51-92.4-61.51-148.49 0-48.54 16-94.03 46.27-131.55 6.07-7.52 4.89-18.54-2.63-24.61s-18.54-4.89-24.61 2.63c-35.35 43.81-54.03 96.9-54.03 153.52 0 65.44 25.48 126.97 71.76 173.24 42.13 42.12 96.89 67.01 155.74 71.14v37.62h-80c-9.67 0-17.5 7.83-17.5 17.5s7.83 17.5 17.5 17.5h195c9.67 0 17.5-7.83 17.5-17.5s-7.83-17.5-17.5-17.5h-80v-37.61c50.04-3.45 96.75-21.74 136.02-53.41 7.52-6.07 8.7-17.09 2.63-24.61-6.07-7.52-17.09-8.7-24.61-2.63Z"
      />
      <Path d="M289.12 365.62c98.72 0 178.75-80.03 178.75-178.75S387.85 8.12 289.12 8.12 110.38 88.15 110.38 186.88s80.03 178.75 178.75 178.75Zm0-322.5c79.26 0 143.75 64.49 143.75 143.75s-64.49 143.75-143.75 143.75-143.75-64.49-143.75-143.75S209.86 43.12 289.12 43.12Z" />
    </Svg>
  );
};
const Home = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M466.11 147.91 319.08 23.16c-36.39-30.87-89.77-30.87-126.16 0L45.89 147.91A130 130 0 0 0 0 247.03v199.81c0 35.9 29.1 65 65 65h382c35.9 0 65-29.1 65-65V247.03c0-38.18-16.78-74.43-45.89-99.13ZM477 446.85c0 16.54-13.46 30-30 30H65c-16.54 0-30-13.46-30-30V247.03c0-27.95 12.22-54.36 33.54-72.44L215.56 49.85c11.28-9.57 25.64-14.84 40.44-14.84s29.15 5.27 40.44 14.84L443.47 174.6a94.852 94.852 0 0 1 33.54 72.44v199.81Z" />
      <Path d="M321 364.5H191c-9.67 0-17.5 7.83-17.5 17.5s7.83 17.5 17.5 17.5h130c9.67 0 17.5-7.83 17.5-17.5s-7.83-17.5-17.5-17.5Z" />
    </Svg>
  );
};
const Location = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="m363.05 168.95-65-55.15c-24.26-20.58-59.85-20.58-84.11 0l-65 55.15a64.98 64.98 0 0 0-22.95 49.56v69.95c0 35.9 29.1 65 65 65h130c35.9 0 65-29.1 65-65v-69.95a64.98 64.98 0 0 0-22.95-49.56ZM351 288.46c0 16.54-13.46 30-30 30H191c-16.54 0-30-13.46-30-30v-69.95c0-8.83 3.86-17.16 10.59-22.88l65-55.15c5.41-4.59 12.31-7.12 19.41-7.12s13.99 2.53 19.41 7.12l65 55.15A29.954 29.954 0 0 1 351 218.51v69.95Z" />
      <Path d="M256 0C130.36 0 28.5 101.86 28.5 227.5c0 61.46 24.37 117.23 63.98 158.17l93.44 96.61c38.32 39.62 101.85 39.62 140.17 0l93.44-96.61c39.61-40.94 63.98-96.71 63.98-158.17C483.5 101.86 381.64 0 256 0Zm138.37 361.33-93.44 96.62C289.05 470.23 273.09 477 256 477s-33.04-6.77-44.93-19.05l-93.44-96.61c-34.91-36.09-54.14-83.61-54.14-133.83 0-106.15 86.35-192.5 192.5-192.5s192.5 86.35 192.5 192.5c0 50.22-19.22 97.75-54.13 133.83Z" />
      <Path d="M288.5 270.96h-65c-9.67 0-17.5 7.83-17.5 17.5s7.83 17.5 17.5 17.5h65c9.67 0 17.5-7.83 17.5-17.5s-7.83-17.5-17.5-17.5Z" />
    </Svg>
  );
};
const Message = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M382 60.38H130c-71.8 0-130 58.2-130 130v130c0 71.8 58.2 130 130 130h252c71.8 0 130-58.2 130-130v-130c0-71.8-58.2-130-130-130Zm95 260c0 52.38-42.62 95-95 95H130c-52.38 0-95-42.62-95-95v-130c0-52.38 42.62-95 95-95h252c52.38 0 95 42.62 95 95v130Z" />
      <Path d="M256 288.61c-17.64 0-35.27-5.6-49.99-16.81l-88.61-67.5c-7.69-5.86-9.17-16.84-3.32-24.53s16.84-9.17 24.53-3.32l88.61 67.5c16.95 12.91 40.62 12.91 57.57 0l88.61-67.5c7.69-5.86 18.67-4.37 24.53 3.32 5.86 7.69 4.37 18.67-3.32 24.53L306 271.8c-14.72 11.21-32.35 16.82-49.99 16.82Z" />
    </Svg>
  );
};
const Moon = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M415.98 438.01c-46.92-46.4-75.99-110.81-75.99-182.01s29.07-135.61 75.99-182.01c22.58-22.33 11.76-60.65-19.22-67.67A256.828 256.828 0 0 0 340.02 0C199.52-.01 85.85 112.09 84.01 252.58 82.14 395.53 197.46 512 339.99 512c19.58 0 38.64-2.2 56.96-6.36 30.89-7.02 41.55-45.35 19.03-67.62Zm-23.2 30.12c-.78 2.74-2.82 3.21-3.59 3.38-16.03 3.64-32.59 5.49-49.2 5.49-59.58 0-115.44-23.35-157.3-65.76-41.85-42.4-64.46-98.58-63.69-158.21.77-58.68 24.06-113.55 65.58-154.52 41.52-40.96 96.71-63.52 155.4-63.52h.02c16.55 0 33.05 1.84 49.02 5.46.8.18 2.94.67 3.75 3.48.84 2.94-.85 4.61-1.41 5.16-55.7 55.09-86.38 128.57-86.38 206.9s30.68 151.81 86.38 206.9c.56.55 2.27 2.24 1.41 5.23Z" />
    </Svg>
  );
};
const NewImage = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Rect x={349.5} y={63.75} width={162.5} height={35} rx={17.5} ry={17.5} />
      <Rect
        x={349.5}
        y={63.75}
        width={162.5}
        height={35}
        rx={17.5}
        ry={17.5}
        transform="rotate(-90 430.75 81.25)"
      />
      <Path d="M162.5 97.5c-35.9 0-65 29.1-65 65s29.1 65 65 65 65-29.1 65-65-29.1-65-65-65Zm0 95c-16.54 0-30-13.46-30-30s13.46-30 30-30 30 13.46 30 30-13.46 30-30 30ZM374.19 240.68 268.38 358.25c-12.46 13.84-33.97 14.41-47.14 1.24l-29.03-29.03c-25.38-25.38-66.54-25.38-91.92 0l-70.58 70.58c-3.21 3.21-6 6.61-8.37 10.13 4.91 18.27 14.31 34.72 26.95 48.08-.13-.28-.24-.54-.33-.77-1.8-4.34-6.65-19.54 6.5-32.69l70.58-70.58c5.67-5.67 13.2-8.79 21.21-8.79s15.55 3.12 21.21 8.79l29.03 29.03c12.75 12.75 29.7 19.77 47.73 19.77 19.11 0 37.4-8.14 50.18-22.34L400.21 264.1c5.76-6.4 13.68-9.93 22.3-9.93s16.54 3.53 22.3 9.93l49.7 55.22V267l-23.69-26.32c-25.82-28.69-70.81-28.69-96.63 0Z" />
      <Path d="M494.5 168.55c-9.67 0-17.5 7.83-17.5 17.5V382c0 52.38-42.62 95-95 95H130c-52.38 0-95-42.62-95-95V130c0-52.38 42.62-95 95-95h195.95c9.67 0 17.5-7.83 17.5-17.5S335.62 0 325.95 0H130C58.2 0 0 58.2 0 130v252c0 71.8 58.2 130 130 130h252c71.8 0 130-58.2 130-130V186.05c0-9.67-7.83-17.5-17.5-17.5Z" />
    </Svg>
  );
};
const NewMessage = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M435.32.99 79.68 66.44C2.42 80.66-27.16 175.73 28.39 231.27l42.13 42.13a64.995 64.995 0 0 1 19.04 45.96v38.08c0 35.9 29.1 65 65 65h38.08c17.24 0 33.77 6.85 45.96 19.04l42.13 42.13c55.55 55.55 150.61 25.96 164.83-51.3l65.45-355.63C519.25 31.9 480.1-7.25 435.32.99ZM53.13 206.52c-16.72-16.72-22.51-40.19-15.48-62.77 7.03-22.58 25.11-38.62 48.36-42.9l355.65-65.44c1.9-.35 3.8-.53 5.66-.53 1.57 0 3.13.13 4.67.38L124.96 362.3c-.26-1.58-.4-3.2-.4-4.85v-38.08c0-26.71-10.4-51.82-29.29-70.71l-42.13-42.13ZM476.59 70.34l-65.45 355.64c-6.48 35.23-36.66 51.28-61.95 51.28-11.55 0-28.51-3.19-43.71-18.4l-42.13-42.13c-18.89-18.89-44-29.29-70.71-29.29h-38.08c-1.65 0-3.27-.14-4.85-.4L476.74 60.01c.5 3.07.55 6.53-.15 10.33Z" />
    </Svg>
  );
};
const NewPost = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M392.19 222.04 290 119.85c-12.78-12.78-33.49-12.78-46.26 0L33.53 330.05a65.432 65.432 0 0 0-18.57 37.45L.37 474.78c-2.91 21.41 15.37 39.71 36.78 36.83l107.23-14.45a65.39 65.39 0 0 0 37.53-18.58L392.19 268.3c12.78-12.78 12.78-33.49 0-46.26Zm-235.03 231.8a30.605 30.605 0 0 1-17.45 8.64L35.46 476.52l14.19-104.31c.89-6.55 3.96-12.74 8.63-17.41l208.59-208.59 98.96 98.96-208.67 208.67ZM493.08 75.49l-56.53-56.53c-25.38-25.38-66.54-25.38-91.92 0L314.6 48.99c-12.69 12.69-12.69 33.27 0 45.96l102.5 102.5c12.69 12.69 33.27 12.69 45.96 0l30.03-30.03c25.38-25.38 25.38-66.54 0-91.92Zm-24.75 67.18-28.26 28.26-98.96-98.96 28.26-28.26c5.67-5.67 13.2-8.79 21.21-8.79s15.55 3.12 21.21 8.79l56.53 56.53c11.7 11.7 11.7 30.73 0 42.43Z" />
      <Rect x={32.5} y={80} width={130} height={35} rx={17.5} ry={17.5} />
      <Rect
        x={32.5}
        y={80}
        width={130}
        height={35}
        rx={17.5}
        ry={17.5}
        transform="rotate(-90 97.5 97.5)"
      />
    </Svg>
  );
};
const Profile = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M382 0H130C58.2 0 0 58.2 0 130v252c0 52.75 31.42 98.16 76.57 118.54 1.19.54 2.4 1.06 3.61 1.56.31.13.62.26.94.38 1.01.41 2.03.81 3.05 1.19.24.09.47.18.71.27 1.26.46 2.52.91 3.79 1.34.19.06.38.12.57.19 1.1.36 2.2.71 3.32 1.04.29.09.59.18.88.26 1.28.37 2.57.74 3.86 1.07 1.35.35 2.7.67 4.06.98.24.05.48.1.72.16 1.16.25 2.32.49 3.49.71.23.04.45.09.68.13 7.69 1.42 15.62 2.17 23.73 2.17h252c8.1 0 16.03-.75 23.73-2.17.23-.04.45-.09.68-.13 1.17-.22 2.33-.46 3.49-.71.24-.05.48-.1.72-.16 1.36-.31 2.72-.63 4.06-.98 1.3-.34 2.58-.7 3.86-1.07.29-.09.59-.17.88-.26 1.11-.33 2.22-.68 3.32-1.04l.57-.18c1.27-.43 2.54-.87 3.8-1.34.24-.09.47-.18.71-.27 1.02-.39 2.04-.78 3.05-1.19.31-.13.62-.25.93-.38 1.21-.5 2.42-1.02 3.61-1.56 45.15-20.38 76.57-65.79 76.57-118.55V130C512 58.2 453.8 0 382 0ZM131.19 477c29.35-36.56 74.39-60 124.81-60s95.46 23.44 124.81 60H131.19ZM477 382c0 39.35-24.05 73.19-58.23 87.59C383.88 416.81 324.01 382 256 382s-127.88 34.82-162.77 87.59C59.05 455.19 35 421.35 35 382V130c0-52.38 42.62-95 95-95h252c52.38 0 95 42.62 95 95v252Z" />
      <Path d="M256 122c-53.85 0-97.5 43.65-97.5 97.5S202.15 317 256 317s97.5-43.65 97.5-97.5S309.85 122 256 122Zm0 160c-34.46 0-62.5-28.04-62.5-62.5S221.54 157 256 157s62.5 28.04 62.5 62.5S290.46 282 256 282Z" />
    </Svg>
  );
};
const Search = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M227.5 0C101.86 0 0 101.86 0 227.5S101.86 455 227.5 455 455 353.14 455 227.5 353.14 0 227.5 0Zm0 420C121.35 420 35 333.64 35 227.5S121.35 35 227.5 35 420 121.35 420 227.5 333.65 420 227.5 420ZM494.5 512c-4.48 0-8.96-1.71-12.37-5.13l-70.78-70.78c-6.83-6.83-6.83-17.91 0-24.75s17.91-6.83 24.75 0l70.78 70.78c6.83 6.83 6.83 17.91 0 24.75-3.42 3.42-7.9 5.13-12.37 5.13Z" />
    </Svg>
  );
};
const Settings = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M256 158.5c-53.85 0-97.5 43.65-97.5 97.5s43.65 97.5 97.5 97.5 97.5-43.65 97.5-97.5-43.65-97.5-97.5-97.5Zm0 160c-34.46 0-62.5-28.04-62.5-62.5s28.04-62.5 62.5-62.5 62.5 28.04 62.5 62.5-28.04 62.5-62.5 62.5Z" />
      <Path d="M477 191h-15.79c-17.82 0-26.74-21.54-14.14-34.14l11.17-11.17c13.67-13.67 13.67-35.83 0-49.5l-42.43-42.43c-13.67-13.67-35.83-13.67-49.5 0l-11.17 11.17C342.54 77.53 321 68.61 321 50.79V35c0-19.33-15.67-35-35-35h-60c-19.33 0-35 15.67-35 35v15.79c0 17.82-21.54 26.74-34.14 14.14l-11.17-11.17c-13.67-13.67-35.83-13.67-49.5 0L53.76 96.19c-13.67 13.67-13.67 35.83 0 49.5l11.17 11.17c12.6 12.6 3.68 34.14-14.14 34.14H35c-19.33 0-35 15.67-35 35v60c0 19.33 15.67 35 35 35h15.79c17.82 0 26.74 21.54 14.14 34.14l-11.17 11.17c-13.67 13.67-13.67 35.83 0 49.5l42.43 42.43c13.67 13.67 35.83 13.67 49.5 0l11.17-11.17c12.6-12.6 34.14-3.68 34.14 14.14V477c0 19.33 15.67 35 35 35h60c19.33 0 35-15.67 35-35v-15.79c0-17.82 21.54-26.74 34.14-14.14l11.17 11.17c13.67 13.67 35.83 13.67 49.5 0l42.43-42.43c13.67-13.67 13.67-35.83 0-49.5l-11.17-11.17c-12.6-12.6-3.68-34.14 14.14-34.14H477c19.33 0 35-15.67 35-35v-60c0-19.33-15.67-35-35-35Zm0 95h-15.79c-22.32 0-42.27 13.33-50.81 33.95s-3.86 44.15 11.92 59.94l11.17 11.17-42.43 42.43-11.17-11.17c-10.41-10.41-24.17-16.15-38.75-16.15-30.41 0-55.14 24.69-55.14 55.04V477h-60v-15.79c0-30.35-24.74-55.04-55.14-55.04-14.57 0-28.33 5.74-38.75 16.15l-11.17 11.17-42.43-42.43 11.17-11.17c15.79-15.79 20.47-39.31 11.92-59.94S73.11 286 50.79 286H35v-60h15.79c22.32 0 42.27-13.33 50.81-33.95 8.54-20.62 3.86-44.15-11.92-59.94l-11.17-11.17 42.43-42.43 11.17 11.17c10.42 10.42 24.18 16.15 38.75 16.15 30.4 0 55.14-24.69 55.14-55.04V35h60v15.79c0 15.44 6.15 29.69 17.33 40.12 10.3 9.62 23.73 14.92 37.82 14.92 14.57 0 28.33-5.74 38.75-16.15l11.17-11.17 42.43 42.43-11.17 11.17c-15.79 15.79-20.47 39.31-11.92 59.94 8.54 20.63 28.49 33.95 50.81 33.95h15.79v60Z" />
    </Svg>
  );
};
const Sun = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M256 93.5c-89.75 0-162.5 72.75-162.5 162.5S166.25 418.5 256 418.5 418.5 345.75 418.5 256 345.75 93.5 256 93.5Zm0 290c-70.3 0-127.5-57.2-127.5-127.5S185.7 128.5 256 128.5 383.5 185.7 383.5 256 326.3 383.5 256 383.5Z" />
      <Rect x={238.5} width={35} height={70} rx={17.5} ry={17.5} />
      <Rect
        x={82.23}
        y={64.73}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(-45 99.73 99.73)"
      />
      <Rect
        x={17.5}
        y={221}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(-90 35 256)"
      />
      <Rect
        x={82.23}
        y={377.27}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(-135 99.73 412.27)"
      />
      <Rect
        x={238.5}
        y={442}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(-180 256 477)"
      />
      <Rect
        x={394.77}
        y={377.27}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(135 412.271 412.27)"
      />
      <Rect
        x={459.5}
        y={221}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(90 477 256)"
      />
      <Rect
        x={394.77}
        y={64.73}
        width={35}
        height={70}
        rx={17.5}
        ry={17.5}
        transform="rotate(45 412.271 99.728)"
      />
    </Svg>
  );
};

export {
  Attach,
  Award,
  Bell,
  Bookmark,
  Ellipse,
  Flame,
  Clap,
  Comment,
  Globe,
  Home,
  Location,
  Message,
  Moon,
  NewImage,
  NewMessage,
  NewPost,
  Profile,
  Search,
  Settings,
  Sun,
};
