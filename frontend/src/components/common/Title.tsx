import React from 'react';

interface TitleProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  align?: 'left' | 'center' | 'right';
}

const Title: React.FC<TitleProps> = ({
  subtitle,
  title,
  titleHighlight,
  className = '',
  subtitleClassName = '',
  titleClassName = '',
  align = 'center'
}) => {
  const getAlignClass = () => {
    switch (align) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      default:
        return 'text-center';
    }
  };

  return (
    <div className={`${getAlignClass()} ${className}`}>
      {subtitle && (
        <span className={`block text-sm md:text-base font-light text-[#999] mb-2 md:mb-4 uppercase tracking-wide ${subtitleClassName}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] leading-tight ${titleClassName}`}>
        {titleHighlight ? (
          <>
            <span className="font-normal">{titleHighlight}</span> {title}
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  );
};

export default Title;
