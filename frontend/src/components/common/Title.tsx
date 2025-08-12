import React from 'react';
import { COLORS } from '../../constants/design';

interface TitleProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  align?: 'left' | 'center' | 'right';
  showBorder?: boolean;
  borderColor?: string;
}

const Title: React.FC<TitleProps> = ({
  subtitle,
  title,
  titleHighlight,
  className = '',
  subtitleClassName = '',
  titleClassName = '',
  align = 'center',
  showBorder = false,
  borderColor = COLORS.BRAND_YELLOW
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
        <span className={`block text-sm md:text-base font-light text-brand-gray-medium mb-2 md:mb-4 uppercase tracking-wide ${subtitleClassName}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight ${titleClassName}`}>
        {titleHighlight ? (
          <>
            <span className="font-normal">{titleHighlight}</span> {title}
          </>
        ) : (
          title
        )}
      </h2>
      {showBorder && (
        <div 
          className="mt-4 w-12 h-0.5 rounded-full"
          style={{ backgroundColor: borderColor }}
        ></div>
      )}
    </div>
  );
};

export default Title;
