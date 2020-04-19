import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

      body {
            padding: 0;
            margin: 0;
      }


      .big-text {
            font-size: 18px; 
      }

      .normal-text {
            font-size: 16px;
      }

      .small-text {
            font-size: 14px;
      }

      .page-layout {
            padding: 1em;
      }

      .input-field-container {
            padding: 5px;
      }
      
      .input-field {
            padding: 10px;
            font-size: 1em;
            margin-top: 5px;
            display:block;
            width: 100%;
            

      }

      .input-field-label {
            font-size: 1em;
            display:block;
      }

      .default-button {
            padding: 10px 15px;
            font-size: 16px;
            background:  black;
            border:0;
            color: #fff;
      }

      .sign-up-page {
            display: flex;
            justify-content: center;
            padding: 1em;
      }

`;
