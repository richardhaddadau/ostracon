import React from "react";
import {
  Svg,
  Path as Path,
  Rect as Rect,
  Circle as Circle,
} from "react-native-svg";

const Attach = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M126.53 357.98c-18.15-2.33-34.58-10.4-47.51-23.34C63.53 319.15 55 298.52 55 276.53s8.53-42.62 24.02-58.11l89.62-89.62c15.49-15.49 36.12-24.02 58.11-24.02s42.62 8.53 58.11 24.02c15.49 15.49 24.02 36.12 24.02 58.11s-8.53 42.62-24.02 58.11l-65.1 65.1c-10.74 10.74-10.74 28.15 0 38.89 10.74 10.74 28.15 10.74 38.89 0l65.1-65.1c25.88-25.88 40.13-60.32 40.13-97s-14.25-71.12-40.13-97c-53.48-53.49-140.51-53.49-194 0l-89.62 89.62C14.25 205.41 0 239.86 0 276.53s14.25 71.12 40.13 97c21.61 21.61 49.07 35.1 79.39 39 1.19.15 2.37.23 3.54.23 13.63 0 25.46-10.12 27.24-24 1.94-15.06-8.7-28.85-23.77-30.78Z" />
      <Path d="M471.87 138.47c-21.61-21.61-49.07-35.1-79.39-39-15.07-1.94-28.85 8.7-30.78 23.77-1.94 15.06 8.7 28.85 23.77 30.78 18.15 2.33 34.58 10.4 47.51 23.34 15.49 15.49 24.02 36.12 24.02 58.11s-8.53 42.62-24.02 58.11l-89.62 89.62c-15.49 15.49-36.12 24.02-58.11 24.02s-42.62-8.53-58.11-24.02-24.02-36.12-24.02-58.11 8.53-42.62 24.02-58.11l65.1-65.1c10.74-10.74 10.74-28.15 0-38.89-10.74-10.74-28.15-10.74-38.89 0l-65.1 65.1c-53.48 53.48-53.48 140.51 0 194 26.74 26.74 61.87 40.11 97 40.11s70.26-13.37 97-40.11l89.62-89.62c25.88-25.88 40.13-60.32 40.13-97 0-36.67-14.25-71.12-40.13-97Z" />
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
      <Path d="M95.13 363.1a230.194 230.194 0 0 1-26.37-31.56l-34.34 59.47c-12.98 22.48 4.33 50.35 30.24 48.68l34.71-2.24a32.502 32.502 0 0 1 31.22 18.03l15.42 31.18c11.51 23.27 44.3 24.33 57.28 1.85L237.65 429c-53.85-4.27-103.91-27.28-142.53-65.9ZM443.24 331.54a230.194 230.194 0 0 1-26.37 31.56c-38.62 38.62-88.67 61.63-142.53 65.9l34.36 59.51c12.98 22.48 45.77 21.42 57.28-1.85l15.42-31.18a32.51 32.51 0 0 1 31.22-18.03l34.71 2.24c25.9 1.67 43.22-26.2 30.24-48.68l-34.34-59.47ZM390.54 61.08c-3.39-3.23-6.89-6.34-10.5-9.32-2.41-1.99-4.86-3.92-7.37-5.79a195.534 195.534 0 0 0-23.73-15.21c-11.05-6-22.75-10.97-34.96-14.77-1.53-.47-3.06-.93-4.6-1.37-16.97-4.82-34.87-7.4-53.38-7.4s-36.42 2.58-53.38 7.4c-1.54.44-3.08.89-4.6 1.37-12.21 3.8-23.91 8.76-34.96 14.77-2.76 1.5-5.49 3.07-8.17 4.7-5.36 3.26-10.55 6.77-15.56 10.51a196.135 196.135 0 0 0-36.74 35.87 195.3 195.3 0 0 0-5.61 7.51 194.522 194.522 0 0 0-20.65 36.98c-1.23 2.92-2.4 5.87-3.49 8.86-7.65 20.91-11.83 43.49-11.83 67.05v.02c0 2 .04 3.99.1 5.97.02.59.04 1.19.07 1.78.06 1.46.13 2.91.22 4.36.04.6.07 1.2.11 1.8.13 1.81.28 3.61.45 5.4.02.16.03.32.04.48.2 1.96.43 3.92.69 5.86.07.52.15 1.04.22 1.57.21 1.47.43 2.94.66 4.39l.27 1.66c.3 1.72.61 3.43.95 5.14.04.2.07.4.11.59.39 1.93.82 3.86 1.27 5.77l.3 1.22c.37 1.52.75 3.03 1.16 4.54.13.48.26.96.39 1.43.46 1.68.94 3.35 1.45 5 .06.18.11.37.17.56.59 1.9 1.2 3.79 1.85 5.67.09.27.19.53.28.8.55 1.59 1.12 3.16 1.71 4.73.15.4.3.79.45 1.19.63 1.64 1.28 3.26 1.95 4.88.07.17.14.34.2.5.78 1.86 1.58 3.7 2.42 5.53.06.12.12.25.17.37.75 1.64 1.53 3.26 2.32 4.88.16.33.33.66.49.99.78 1.57 1.58 3.12 2.41 4.66l.27.51c.96 1.78 1.94 3.55 2.95 5.29 33.72 58.27 96.73 97.47 168.89 97.47s135.17-39.2 168.89-97.47c1.01-1.75 1.99-3.51 2.95-5.3.09-.17.18-.33.26-.5.82-1.54 1.63-3.1 2.41-4.67.16-.33.33-.66.49-.99.8-1.61 1.57-3.24 2.32-4.88.06-.12.12-.25.17-.37.83-1.83 1.64-3.67 2.42-5.53.07-.17.13-.33.2-.5.67-1.62 1.32-3.24 1.95-4.88.15-.39.3-.79.45-1.18.59-1.57 1.16-3.14 1.71-4.73.09-.27.19-.53.28-.8.64-1.88 1.26-3.77 1.85-5.67.06-.18.11-.37.17-.56.51-1.66.99-3.33 1.45-5l.39-1.43c.4-1.51.79-3.02 1.16-4.54l.3-1.22c.45-1.91.88-3.84 1.27-5.77.04-.2.07-.39.11-.59.34-1.71.66-3.42.95-5.14l.27-1.65c.24-1.46.46-2.93.67-4.4.07-.52.15-1.04.22-1.56.26-1.95.49-3.9.69-5.87.02-.16.03-.31.04-.47.18-1.8.33-3.61.45-5.42.04-.6.08-1.19.11-1.79.09-1.45.16-2.91.22-4.37.02-.59.05-1.18.07-1.77.06-1.99.1-3.99.1-5.99 0-55.53-23.21-105.64-60.46-141.15Zm-42.62 128.5-31.24 23.69a16.256 16.256 0 0 0-5.74 17.65l11.35 37.53c4.46 14.75-12.19 26.84-24.84 18.04l-32.18-22.39a16.252 16.252 0 0 0-18.56 0l-32.18 22.39c-12.65 8.8-29.3-3.3-24.84-18.04l11.35-37.53a16.23 16.23 0 0 0-5.74-17.65l-31.24-23.69c-12.28-9.31-5.92-28.88 9.49-29.2l39.2-.8c6.8-.14 12.79-4.49 15.02-10.91l12.87-37.03c5.06-14.55 25.64-14.55 30.7 0l12.87 37.03a16.247 16.247 0 0 0 15.02 10.91l39.2.8c15.4.31 21.76 19.89 9.49 29.2Z" />
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
      <Path d="m465.12 328.26-26.27-41.23a129.96 129.96 0 0 1-20.36-69.85v-20.63c0-68.1-41.51-127.06-100.71-151.73C309.3 18.81 284.85 0 256 0s-53.19 18.72-61.73 44.65C135.14 68.95 93.5 127.11 93.5 195v22.18c0 24.75-7.06 48.98-20.36 69.85l-26.27 41.23c-22.44 35.22-6.27 82.02 33.02 96.16a516.832 516.832 0 0 0 84.12 22.46C177.36 484.81 213.5 512 256 512s78.63-27.19 91.99-65.12a516.832 516.832 0 0 0 84.12-22.46c39.29-14.14 55.46-60.94 33.02-96.16ZM256 477c-20.1 0-38-9.54-49.44-24.33C222.83 454.2 239.32 455 256 455s33.16-.79 49.44-2.33C294 467.46 276.1 477 256 477Z" />
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
      <Path d="M386 162.5H126c-17.95 0-32.5 14.55-32.5 32.5v284.44c0 28.95 35.01 43.45 55.48 22.98l61.06-61.06c25.38-25.38 66.54-25.38 91.92 0l61.06 61.06c20.47 20.47 55.48 5.97 55.48-22.98V195c0-17.95-14.55-32.5-32.5-32.5ZM353.5 0h-195c-35.9 0-65 29.1-65 65v32.5c0 17.95 14.55 32.5 32.5 32.5h260c17.95 0 32.5-14.55 32.5-32.5V65c0-35.9-29.1-65-65-65Z" />
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
      <Path d="m250.77 160.57 53.72-53.72c-8.38-6.48-18.59-10.01-29.36-10.01-12.85 0-24.92 5-34.01 14.09l-16.23 16.23c12.23 7.66 21.41 19.39 25.87 33.42ZM131.7 435.95a156.087 156.087 0 0 1-41.5-74.25c-6.7-28.13-5.48-57.51 3.55-84.98l38.17-116.18c1.7-5.18 4.03-10.01 6.87-14.43-6.43-6.67-15.09-11.2-25.05-12.54-20.62-2.77-39.55 9.09-46.04 28.86L29.53 278.61a136.093 136.093 0 0 0-3.09 74.1 136.161 136.161 0 0 0 36.19 64.74l37.49 37.49c25.58 25.58 59.53 39.73 95.68 39.89a156.866 156.866 0 0 1-26.6-21.4l-37.48-37.49Z" />
      <Path d="M493.38 273.88c-3.26-3.26-6.9-5.98-10.83-8.14 6.76-8.48 10.44-18.91 10.44-29.91 0-12.85-5-24.92-14.09-34.01a48.382 48.382 0 0 0-11.21-8.36c13.13-18.75 11.34-44.84-5.4-61.57-16.74-16.74-42.84-18.52-61.59-5.38a48.046 48.046 0 0 0-8.34-11.22c-9.08-9.08-21.16-14.09-34.01-14.09s-24.92 5-34.01 14.09l-85.29 85.29c-.34.34-1.15 1.15-2.67.57s-1.57-1.72-1.6-2.21l-1.05-21.02c-1.04-20.78-16.17-37.22-36.78-39.99-20.62-2.77-39.55 9.09-46.04 28.86l-38.17 116.18a136.093 136.093 0 0 0-3.09 74.1 136.161 136.161 0 0 0 36.19 64.74l37.48 37.49c25.73 25.73 59.94 39.9 96.33 39.9s70.6-14.17 96.33-39.9l117.4-117.4c9.08-9.08 14.09-21.16 14.09-34.01 0-12.85-5-24.92-14.09-34.01ZM375.85 71.69c1.52.41 3.04.6 4.54.6 7.73 0 14.8-5.16 16.89-12.98l8.41-31.39c2.5-9.34-3.04-18.93-12.37-21.43-9.34-2.5-18.93 3.04-21.43 12.37l-8.41 31.39c-2.5 9.34 3.04 18.93 12.37 21.43ZM408.35 95.8c3.24 5.61 9.12 8.75 15.17 8.75 2.97 0 5.98-.76 8.73-2.35l28.15-16.25c8.37-4.83 11.24-15.54 6.41-23.91-4.83-8.37-15.54-11.24-23.91-6.41l-28.15 16.25c-8.37 4.83-11.24 15.54-6.41 23.91ZM311.75 69.91c3.24 5.61 9.12 8.75 15.17 8.75 2.97 0 5.98-.76 8.73-2.35 8.37-4.83 11.24-15.54 6.41-23.91l-16.25-28.15c-4.83-8.37-15.53-11.24-23.91-6.41-8.37 4.83-11.24 15.54-6.41 23.91l16.25 28.15Z" />
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
      <Path d="M382 0H130C58.2 0 0 58.2 0 130v162.5c0 71.8 58.2 130 130 130h5.96c19.34 0 37.68 8.61 50.03 23.5l44.99 54.24c13 15.67 37.03 15.67 50.03 0L326 446a64.998 64.998 0 0 1 50.03-23.5h5.96c71.8 0 130-58.2 130-130V130C512 58.2 453.8 0 382 0ZM100 113.75h130c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5H100c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5Zm312 195H100c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5h312c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5Zm0-80H100c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5h312c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5Z" />
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
      <Path d="M0 0h512v512H0z" transform="translate(.006) scale(4.16667)" />
      <Circle
        cx={2407}
        cy={256}
        r={65}
        transform="translate(-8275.001) scale(4.16667)"
      />
      <Circle
        cx={2407}
        cy={256}
        r={65}
        transform="translate(-8962.502) scale(4.16667)"
      />
      <Circle
        cx={2407}
        cy={256}
        r={65}
        style={{
          fill: "#363744",
        }}
        transform="translate(-9650.002) scale(4.16667)"
      />
    </Svg>
  );
};
const Feed = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M447 0H65C29.1 0 0 29.1 0 65v382c0 35.9 29.1 65 65 65h382c35.9 0 65-29.1 65-65V65c0-35.9-29.1-65-65-65ZM256 376c0 15.19-12.31 27.5-27.5 27.5H102.25c-15.19 0-27.5-12.31-27.5-27.5s12.31-27.5 27.5-27.5H228.5c15.19 0 27.5 12.31 27.5 27.5Zm181.25-120c0 15.19-12.31 27.5-27.5 27.5h-307.5c-15.19 0-27.5-12.31-27.5-27.5s12.31-27.5 27.5-27.5h307.5c15.19 0 27.5 12.31 27.5 27.5Zm0-120c0 15.19-12.31 27.5-27.5 27.5h-307.5c-15.19 0-27.5-12.31-27.5-27.5s12.31-27.5 27.5-27.5h307.5c15.19 0 27.5 12.31 27.5 27.5Z" />
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
      <Path d="M354.77 61.89c-16.79-14.23-34.4-29.19-52.33-45.5A63.003 63.003 0 0 0 251.69.56a60.71 60.71 0 0 0-43.36 27.74 434.78 434.78 0 0 0-53.18 137.62c-3.83-5.53-7.22-11.34-10.16-17.39-10.11-21.3-35.56-30.36-56.86-20.26-5.16 2.45-9.77 5.9-13.56 10.16a193.512 193.512 0 0 0-55.19 137.03c-1.02 107.57 71.34 202.01 175.46 229.03 19.37 4.87 39.26 7.4 59.24 7.51.64 0 7.45-.06 10.2-.26 127.4-4.13 228.5-108.68 228.34-236.15-.09-96.67-63.94-150.88-137.86-213.7Zm-81.25 294.23c-.68.19-1.39.29-2.1.31l-15.04.49-.69.05c-.51 0-1.08.02-1.57.03-7.03-.1-14.05-1-20.88-2.68l-.24-.06c-7.67-2.07-8.77-12.45-1.83-16.33 33-18.44 57.7-50.64 65.52-89.58l2.06-10.24c1.42-7.09 10.24-9.68 15.25-4.47 5.25 5.47 9.84 10.7 13.58 15.67 9.34 12.41 10.04 18.52 10.05 26.42.05 36.42-23.84 69.39-64.1 80.39Z" />
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
      <Path d="M419.39 334.7c-35.72 28.82-79.03 44.05-125.26 44.05-53.42 0-103.65-20.8-141.42-58.58-37.78-37.78-58.58-88-58.58-141.42 0-46.23 15.23-89.55 44.05-125.27 9.54-11.82 7.69-29.13-4.13-38.67-11.82-9.54-29.13-7.68-38.67 4.13-36.8 45.61-56.25 100.87-56.25 159.8 0 68.11 26.52 132.15 74.69 180.31 41.62 41.62 95.1 67.06 152.81 73.21v24.72h-70c-15.19 0-27.5 12.31-27.5 27.5s12.31 27.5 27.5 27.5h195c15.19 0 27.5-12.31 27.5-27.5s-12.31-27.5-27.5-27.5h-70v-24.69c48.57-5.11 93.86-23.8 132.3-54.81 11.82-9.54 13.67-26.85 4.14-38.67-9.54-11.82-26.85-13.67-38.67-4.14Z" />
      <Circle cx={294.12} cy={178.75} r={178.75} />
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
      <Path d="M466.11 147.91 319.08 23.16c-36.39-30.87-89.77-30.87-126.16 0L45.89 147.91A130 130 0 0 0 0 247.03v199.81c0 35.9 29.1 65 65 65h382c35.9 0 65-29.1 65-65V247.03c0-38.18-16.78-74.43-45.89-99.13ZM321 399.5H191c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5h130c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5Z" />
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
      <Path d="m340.41 195.64-65-55.15c-5.41-4.59-12.31-7.12-19.41-7.12s-13.99 2.53-19.41 7.12l-65 55.15A29.954 29.954 0 0 0 161 218.52v69.95c0 16.54 13.46 30 30 30h130c16.54 0 30-13.46 30-30v-69.95c0-8.83-3.86-17.16-10.59-22.88ZM288.5 305.96h-65c-9.67 0-17.5-7.83-17.5-17.5s7.83-17.5 17.5-17.5h65c9.67 0 17.5 7.83 17.5 17.5s-7.83 17.5-17.5 17.5Z" />
      <Path d="M256 0C130.36 0 28.5 101.86 28.5 227.5c0 61.46 24.37 117.23 63.98 158.17l93.44 96.61c38.32 39.62 101.85 39.62 140.17 0l93.44-96.61c39.61-40.94 63.98-96.71 63.98-158.17C483.5 101.86 381.64 0 256 0Zm130 288.46c0 35.9-29.1 65-65 65H191c-35.9 0-65-29.1-65-65v-69.95a64.98 64.98 0 0 1 22.95-49.56l65-55.15c24.26-20.58 59.85-20.58 84.11 0l65 55.15a64.98 64.98 0 0 1 22.95 49.56v69.95Z" />
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
      <Path d="M382 60.38H130c-71.8 0-130 58.2-130 130v130c0 71.8 58.2 130 130 130h252c71.8 0 130-58.2 130-130v-130c0-71.8-58.2-130-130-130Zm12.6 143.92-88.61 67.5c-14.72 11.21-32.35 16.82-49.99 16.82s-35.27-5.6-49.99-16.81l-88.61-67.5c-7.69-5.86-9.17-16.84-3.32-24.53s16.84-9.17 24.53-3.32l88.61 67.5c16.95 12.91 40.62 12.91 57.57 0l88.61-67.5c7.69-5.86 18.67-4.37 24.53 3.32 5.86 7.69 4.37 18.67-3.32 24.53Z" />
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
      <Path d="M415.98 438.01c-46.92-46.4-75.99-110.81-75.99-182.01s29.07-135.61 75.99-182.01c22.58-22.33 11.76-60.65-19.22-67.67A256.828 256.828 0 0 0 340.02 0C199.52-.01 85.85 112.09 84.01 252.58 82.14 395.53 197.46 512 339.99 512c19.58 0 38.64-2.2 56.96-6.36 30.89-7.02 41.55-45.35 19.03-67.62Z" />
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
      <Path d="M435.32.99 79.68 66.44C2.42 80.66-27.16 175.73 28.39 231.27l42.13 42.13a64.995 64.995 0 0 1 19.04 45.96v38.08c0 35.9 29.1 65 65 65h38.08c17.24 0 33.77 6.85 45.96 19.04l42.13 42.13c55.55 55.55 150.61 25.96 164.83-51.3l65.45-355.63C519.25 31.9 480.1-7.25 435.32.99ZM67.28 192.38c-16.39-16.39-12.82-35.31-10.53-42.68 2.29-7.37 10.09-24.97 32.89-29.17l322.24-59.3-267.32 267.32v-9.19c0-32.05-12.48-62.19-35.15-84.85l-42.13-42.13Zm324.19 229.98c-4.41 23.98-25.01 34.9-42.28 34.9-7.77 0-19.21-2.18-29.57-12.54l-42.13-42.13c-22.67-22.67-52.8-35.15-84.85-35.15h-9.19l267.32-267.32-59.31 322.25Z" />
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
      <Path d="M392.19 222.04 290 119.85c-12.78-12.78-33.49-12.78-46.26 0L33.53 330.05a65.432 65.432 0 0 0-18.57 37.45L.37 474.78c-2.91 21.41 15.37 39.71 36.78 36.83l107.23-14.45a65.39 65.39 0 0 0 37.53-18.58L392.19 268.3c12.78-12.78 12.78-33.49 0-46.26ZM493.08 75.49l-56.53-56.53c-25.38-25.38-66.54-25.38-91.92 0L314.6 48.99c-12.69 12.69-12.69 33.27 0 45.96l102.5 102.5c12.69 12.69 33.27 12.69 45.96 0l30.03-30.03c25.38-25.38 25.38-66.54 0-91.92Z" />
      <Rect y={70} width={195} height={55} rx={27.5} ry={27.5} />
      <Rect
        y={70}
        width={195}
        height={55}
        rx={27.5}
        ry={27.5}
        transform="rotate(-90 97.5 97.5)"
      />
    </Svg>
  );
};
const Next = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M501.7 231.3 409.5 139c-10.7-10.7-28.2-10.7-38.9 0s-10.7 28.2 0 38.9l50.6 50.6H27.5C12.3 228.5 0 240.8 0 256s12.3 27.5 27.5 27.5h393.7l-50.6 50.6c-10.7 10.7-10.7 28.2 0 38.9s28.2 10.7 38.9 0l92.3-92.3c13.6-13.6 13.6-35.8-.1-49.4z" />
    </Svg>
  );
};
const Person = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M433.5 504.5c-15.19 0-27.5-12.31-27.5-27.5 0-82.71-67.29-150-150-150s-150 67.29-150 150c0 15.19-12.31 27.5-27.5 27.5S51 492.19 51 477c0-113.04 91.96-205 205-205s205 91.96 205 205c0 15.19-12.31 27.5-27.5 27.5Z" />
      <Circle cx={256} cy={115} r={115} />
    </Svg>
  );
};
const Play = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="m424.48 203.61-260-191C153.71 4.68 140.4 0 126 0 90.1 0 61 29.1 61 65v382c0 35.9 29.1 65 65 65 14.4 0 27.71-4.68 38.48-12.61l260-191C440.56 296.56 451 277.5 451 256s-10.43-40.55-26.52-52.39Z" />
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
      <Circle cx={256} cy={219.5} r={62.5} />
      <Path d="M382 0H130C58.2 0 0 58.2 0 130v252c0 71.8 58.2 130 130 130h252c71.8 0 130-58.2 130-130V130C512 58.2 453.8 0 382 0ZM256 122c53.85 0 97.5 43.65 97.5 97.5S309.85 317 256 317s-97.5-43.65-97.5-97.5S202.15 122 256 122Zm126 355h-1.19c-29.35-36.56-74.39-60-124.81-60s-95.46 23.44-124.81 60H130c-13.03 0-25.46-2.64-36.77-7.41C128.12 416.81 187.99 382 256 382s127.88 34.82 162.77 87.59C407.45 474.36 395.03 477 382 477Z" />
    </Svg>
  );
};
const RemoveFollow = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Circle cx={256} cy={254.5} r={62.5} />
      <Path d="M382 0H130C58.2 0 0 58.2 0 130v252c0 52.75 31.42 98.16 76.57 118.54 1.19.54 2.4 1.06 3.61 1.56.31.13.62.26.94.38 1.01.41 2.03.81 3.05 1.19.24.09.47.18.71.27 1.26.46 2.52.91 3.79 1.34.19.06.38.12.57.19 1.1.36 2.2.71 3.32 1.04.29.09.59.18.88.26 1.28.37 2.57.74 3.86 1.07 1.35.35 2.7.67 4.06.98.24.05.48.1.72.16 1.16.25 2.32.49 3.49.71.23.04.45.09.68.13 7.69 1.42 15.62 2.17 23.73 2.17h252c8.1 0 16.03-.75 23.73-2.17.23-.04.45-.09.68-.13 1.17-.22 2.33-.46 3.49-.71.24-.05.48-.1.72-.16 1.36-.31 2.72-.63 4.06-.98 1.3-.34 2.58-.7 3.86-1.07.29-.09.59-.17.88-.26 1.11-.33 2.22-.68 3.32-1.04l.57-.18c1.27-.43 2.54-.87 3.8-1.34.24-.09.47-.18.71-.27 1.02-.39 2.04-.78 3.05-1.19.31-.13.62-.25.93-.38 1.21-.5 2.42-1.02 3.61-1.56 45.15-20.38 76.57-65.79 76.57-118.55V130C512 58.2 453.8 0 382 0ZM256 157c53.85 0 97.5 43.65 97.5 97.5S309.85 352 256 352s-97.5-43.65-97.5-97.5S202.15 157 256 157Zm126 320h-1.19c-29.35-36.56-74.39-60-124.81-60s-95.46 23.44-124.81 60H130c-13.03 0-25.46-2.64-36.77-7.41C128.12 416.81 187.99 382 256 382s127.88 34.82 162.77 87.59C407.45 474.36 395.03 477 382 477Zm75-357c0 9.66-7.84 17.5-17.5 17.5h-95c-9.66 0-17.5-7.84-17.5-17.5 0-9.67 7.83-17.5 17.5-17.5h95c9.66 0 17.5 7.84 17.5 17.5Z" />
    </Svg>
  );
};
const Ring = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Circle cx={251.8} cy={256} r={130} />
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
      <Path d="M484.5 512c-7.04 0-14.08-2.68-19.45-8.05l-53.71-53.71c-10.74-10.74-10.74-28.15 0-38.89 10.74-10.74 28.15-10.74 38.89 0l53.71 53.71c10.74 10.74 10.74 28.15 0 38.89-5.37 5.37-12.41 8.05-19.45 8.05ZM227.5 0C101.86 0 0 101.86 0 227.5S101.86 455 227.5 455 455 353.14 455 227.5 353.14 0 227.5 0Zm0 400C132.38 400 55 322.62 55 227.5S132.38 55 227.5 55 400 132.38 400 227.5 322.62 400 227.5 400Z" />
    </Svg>
  );
};
const Send = ({ size = 24, color = "black", style }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      style={style}
    >
      <Path d="M435.32.99 79.68 66.44C2.42 80.66-27.16 175.73 28.39 231.27l42.13 42.13a64.995 64.995 0 0 1 19.04 45.96v38.08c0 35.9 29.1 65 65 65h38.08c17.24 0 33.77 6.85 45.96 19.04l42.13 42.13c55.55 55.55 150.61 25.96 164.83-51.3l65.45-355.63C519.25 31.9 480.1-7.25 435.32.99ZM67.28 192.38c-16.39-16.39-12.82-35.31-10.53-42.68 2.29-7.37 10.09-24.97 32.89-29.17l322.24-59.3-267.32 267.32v-9.19c0-32.05-12.48-62.19-35.15-84.85l-42.13-42.13Zm324.19 229.98c-4.41 23.98-25.01 34.9-42.28 34.9-7.77 0-19.21-2.18-29.57-12.54l-42.13-42.13c-22.67-22.67-52.8-35.15-84.85-35.15h-9.19l267.32-267.32-59.31 322.25Z" />
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
      <Circle cx={256} cy={256} r={62.5} />
      <Path d="M477 191h-15.79c-17.82 0-26.74-21.54-14.14-34.14l11.17-11.17c13.67-13.67 13.67-35.83 0-49.5l-42.43-42.43c-13.67-13.67-35.83-13.67-49.5 0l-11.17 11.17C342.54 77.53 321 68.61 321 50.79V35c0-19.33-15.67-35-35-35h-60c-19.33 0-35 15.67-35 35v15.79c0 17.82-21.54 26.74-34.14 14.14l-11.17-11.17c-13.67-13.67-35.83-13.67-49.5 0L53.76 96.19c-13.67 13.67-13.67 35.83 0 49.5l11.17 11.17c12.6 12.6 3.68 34.14-14.14 34.14H35c-19.33 0-35 15.67-35 35v60c0 19.33 15.67 35 35 35h15.79c17.82 0 26.74 21.54 14.14 34.14l-11.17 11.17c-13.67 13.67-13.67 35.83 0 49.5l42.43 42.43c13.67 13.67 35.83 13.67 49.5 0l11.17-11.17c12.6-12.6 34.14-3.68 34.14 14.14V477c0 19.33 15.67 35 35 35h60c19.33 0 35-15.67 35-35v-15.79c0-17.82 21.54-26.74 34.14-14.14l11.17 11.17c13.67 13.67 35.83 13.67 49.5 0l42.43-42.43c13.67-13.67 13.67-35.83 0-49.5l-11.17-11.17c-12.6-12.6-3.68-34.14 14.14-34.14H477c19.33 0 35-15.67 35-35v-60c0-19.33-15.67-35-35-35ZM256 353.5c-53.85 0-97.5-43.65-97.5-97.5s43.65-97.5 97.5-97.5 97.5 43.65 97.5 97.5-43.65 97.5-97.5 97.5Z" />
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
      <Rect x={228.5} width={55} height={100} rx={27.5} ry={27.5} />
      <Rect
        x={82.84}
        y={60.34}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(-45 110.342 110.335)"
      />
      <Rect
        x={22.5}
        y={206}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(-90 50 256)"
      />
      <Rect
        x={82.84}
        y={351.66}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(-135 110.337 401.662)"
      />
      <Rect
        x={228.5}
        y={412}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(180 256 462)"
      />
      <Rect
        x={374.16}
        y={351.66}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(135 401.663 401.661)"
      />
      <Rect
        x={434.5}
        y={206}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(90 462 256)"
      />
      <Rect
        x={374.16}
        y={60.34}
        width={55}
        height={100}
        rx={27.5}
        ry={27.5}
        transform="rotate(45 401.659 110.333)"
      />
      <Circle cx={256} cy={256} r={130} />
    </Svg>
  );
};

export {
  Attach,
  Award,
  Bell,
  Bookmark,
  Clap,
  Comment,
  Ellipse,
  Feed,
  Flame,
  Globe,
  Home,
  Location,
  Message,
  Moon,
  NewMessage,
  NewPost,
  Next,
  Person,
  Play,
  Profile,
  RemoveFollow,
  Ring,
  Search,
  Send,
  Settings,
  Sun,
};
