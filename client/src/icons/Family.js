import React from 'react';
import styled from '@emotion/styled';
import { flipIn } from '../components/General/Animation';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.text};
  animation: ${flipIn} 3s ease-in;
`;

export default function Ball(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="100px"
      height="100px"
      {...props}
    >
      <path
        fill="#fff"
        d="M41.3 50.5c-.7-4.9-4.9-8.5-9.9-8.5H14C8.5 42 4 46.5 4 52v30h6l0 31.7c0 3.3 2.5 6.2 5.8 6.2 3.4.1 6.2-2.6 6.2-6 0 3.4 2.8 6.1 6.2 6 3.3-.1 5.8-3 5.8-6.2L34 82 41.3 50.5zM114 42H97c-5.1 0-9.4 3.9-10 9L94 82v12h24V82h6V52C124 46.5 119.5 42 114 42zM55 82v12c0 5.5 4.5 10 10 10h0c5.5 0 10-4.5 10-10V82"
      />
      <path
        fill="#444b54"
        d="M65,107c-7.2,0-13-5.8-13-13v-2c0-1.7,1.3-3,3-3s3,1.3,3,3v2c0,3.9,3.1,7,7,7s7-3.1,7-7v-2c0-1.7,1.3-3,3-3s3,1.3,3,3v2C78,101.2,72.2,107,65,107z"
      />
      {/* FatherHead */}
      <path fill="#D7F4FF" d="M22 12A10 10 0 1 0 22 32A10 10 0 1 0 22 12Z" />
      <path
        fill="#444b54"
        d="M22 35c-7.2 0-13-5.8-13-13S14.8 9 22 9s13 5.8 13 13S29.2 35 22 35zM22 15c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7S25.9 15 22 15zM28 123c-5 0-9-4-9-9 0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7 1.3 3 3 3s3-1.3 3-3V82c0-1.7 1.3-3 3-3s3 1.3 3 3v32C37 119 33 123 28 123z"
      />
      <path
        fill="#444b54"
        d="M16,123c-5,0-9-4-9-9V85H4c-1.7,0-3-1.3-3-3V52c0-7.2,5.8-13,13-13h17.4c6.5,0,11.9,4.7,12.9,11.1l1.9,12.7C47.6,72.2,55.5,79,65,79c1.7,0,3,1.3,3,3s-1.3,3-3,3c-12.5,0-22.9-9-24.8-21.3L38.3,51c-0.5-3.5-3.4-6-6.9-6H14c-3.9,0-7,3.1-7,7v27h3c1.7,0,3,1.3,3,3v32c0,1.7,1.3,3,3,3s3-1.3,3-3V82c0-1.7,1.3-3,3-3s3,1.3,3,3v32C25,119,21,123,16,123z"
      />
      <g>
        {/*  MotherHead */}
        <path fill="#FF7272" d="M106 12A10 10 0 1 0 106 32A10 10 0 1 0 106 12Z" />
        <path
          fill="#444b54"
          d="M118,97c-1.7,0-3-1.3-3-3V82c0-1.7,1.3-3,3-3h3V52c0-3.9-3.1-7-7-7H97c-3.6,0-6.6,2.7-7,6.3l-1.2,12.1C87.6,75.7,77.4,85,65,85c-1.7,0-3-1.3-3-3s1.3-3,3-3c9.3,0,17-7,17.9-16.2l1.2-12.1C84.8,44,90.3,39,97,39h17c7.2,0,13,5.8,13,13v30c0,1.7-1.3,3-3,3h-3v9C121,95.7,119.7,97,118,97z"
        />
        {/*  ChildHead */}

        <path fill="#ffd626" d="M65 56A7 7 0 1 0 65 70A7 7 0 1 0 65 56Z" />
        <path
          fill="#444b54"
          d="M65 73c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10S70.5 73 65 73zM65 59c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4S67.2 59 65 59zM106 35c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13S113.2 35 106 35zM106 15c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7S109.9 15 106 15zM94 96.7c-1.7 0-3-1.3-3-3V82c0-1.7 1.3-3 3-3s3 1.3 3 3v11.7C97 95.4 95.7 96.7 94 96.7z"
        />
        <g>
          <path
            fill="#444b54"
            d="M118,97H94c-1.7,0-3-1.3-3-3s1.3-3,3-3h24c1.7,0,3,1.3,3,3S119.7,97,118,97z"
          />
        </g>
        <g>
          <path
            fill="#444b54"
            d="M101,123c-1.7,0-3-1.3-3-3V94c0-1.7,1.3-3,3-3s3,1.3,3,3v26C104,121.7,102.7,123,101,123z"
          />
        </g>
        <g>
          <path
            fill="#444b54"
            d="M111,123c-1.7,0-3-1.3-3-3V94c0-1.7,1.3-3,3-3s3,1.3,3,3v26C114,121.7,112.7,123,111,123z"
          />
        </g>
        <g>
          <path
            fill="#444b54"
            d="M60,123c-1.7,0-3-1.3-3-3v-16c0-1.7,1.3-3,3-3s3,1.3,3,3v16C63,121.7,61.7,123,60,123z"
          />
        </g>
        <g>
          <path
            fill="#444b54"
            d="M70,123c-1.7,0-3-1.3-3-3v-16c0-1.7,1.3-3,3-3s3,1.3,3,3v16C73,121.7,71.7,123,70,123z"
          />
        </g>
      </g>
    </Svg>
  );
}
