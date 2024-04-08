import {
  HeaderContainer,
  Navigation,
  LogoLink,
  SignInLink,
  LogoWrapper,
  SignWrapper,
} from './Header.styled';
import { ReactComponent as LogoIcon } from '../headerIcons/Logo.svg';
import { ReactComponent as OutlineIcon } from '../headerIcons/Outline.svg';
import { LanguageSwitcher } from '../../LanguageSwitcher/LanguageSwitcher.jsx';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <LogoLink to="/welcome">
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
          TRACKER<br /> 
          OF WATER
        </LogoLink>
        <LanguageSwitcher />
        <SignInLink to="/signin">
          Sign in
          <SignWrapper>
            <OutlineIcon />
          </SignWrapper>
        </SignInLink>
      </Navigation>
    </HeaderContainer>
  );
};
