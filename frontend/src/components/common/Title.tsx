import React from "react";

interface TitleProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  titleHighlightClassName?: string;
  align?: "left" | "center" | "right";
  showBorder?: boolean;
  borderColor?: string;
}

const Title: React.FC<TitleProps> = ({
  subtitle,
  title,
  titleHighlight,
  className = "",
  subtitleClassName = "",
  titleClassName = "",
  titleHighlightClassName = "",
  align = "center",
  showBorder = false,
  borderColor = "#ffcd00",
}) => {
  const getAlignClass = () => {
    switch (align) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <div className={`${getAlignClass()} ${className}`}>
      {subtitle && (
        <span
          className={`block text-xs md:text-sm mb-2 md:mb-4 uppercase tracking-wide ${subtitleClassName}`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl leading-tight font-bold ${titleClassName}`}
      >
                 {titleHighlight ? (
           <>
             <span className={`font-normal ${titleHighlightClassName}`}>{titleHighlight}</span> {title}
           </>
         ) : (
           title
         )}
      </h2>
      {showBorder && (
        <div className="mt-4 w-12 h-0.5 rounded-full bg-brand-yellow"></div>
      )}
    </div>
  );
};

export default Title;
