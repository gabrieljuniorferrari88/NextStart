import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ScriptStyle } from '@/components/scripts/StyleID';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript>
            <ScriptStyle />
          </NextScript>
        </body>
      </Html>
    );
  }
}
