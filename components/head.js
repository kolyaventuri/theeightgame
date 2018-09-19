import NextHead from 'next/head';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{ props.title || '' }</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
);

export default Head;
