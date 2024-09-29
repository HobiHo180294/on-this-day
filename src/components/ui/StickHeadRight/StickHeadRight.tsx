import stickHeadRightIcon from '@/public/stick-head-right-ico.svg';
import { AdvancedImage } from '../AdvancedImage/AdvancedImage';

export const StickHeadRight = (): React.JSX.Element => (
  <AdvancedImage
    src={stickHeadRightIcon}
    alt="Stick Head Right"
    width={40}
    height={40}
  />
);
