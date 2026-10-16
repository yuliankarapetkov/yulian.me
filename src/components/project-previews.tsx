const imageWidths = [640, 960, 1440] as const;
const imageSizes =
  "(max-width: 700px) 90vw, (max-width: 899px) 226px, (max-width: 1099px) 40vw, (min-width: 1800px) 610px, 36vw";

type ProjectPreviewProps = {
  imageBase: string;
  alt: string;
  site: string;
};

export function ProjectPreview({ imageBase, alt, site }: ProjectPreviewProps) {
  return (
    <figure className="project-preview">
      <div className="preview-browser-bar" aria-hidden="true">
        <div className="preview-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <span>{site}</span>
      </div>
      <picture>
        <source
          type="image/webp"
          srcSet={imageWidths.map((width) => `${imageBase}-${width}.webp ${width}w`).join(", ")}
          sizes={imageSizes}
        />
        <img
          src={`${imageBase}.jpg`}
          alt={alt}
          width={1440}
          height={1000}
          loading="lazy"
          decoding="async"
          className="project-screenshot"
        />
      </picture>
    </figure>
  );
}
