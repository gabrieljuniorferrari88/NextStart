import Script from 'next/script';
import { getCssText } from 'stitches.config';

const getCssAndReset = () => {
  const css = getCssText();

  return css;
};

const StyleScript = () => {
  return (
    <>
      <Script id="stitches">
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
      </Script>
    </>
  );
};

export default StyleScript;
