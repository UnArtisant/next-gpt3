import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="fr">
        <Head>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}