import stickHeadLeftIcon from '@/public/stick-head-left-ico.svg';
import { AdvancedImage } from '../AdvancedImage/AdvancedImage';

export const StickHeadLeft = (): React.JSX.Element => (
  <AdvancedImage
    src={stickHeadLeftIcon}
    alt="Stick Head Left"
    width={40}
    height={40}
  />
);
