import { AppBar, IconButton, Link, Stack, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  GITHUB_LINK_STYLES,
  LOGO_STYLES,
  STACK_STYLES,
  TOOLBAR_STYLES,
} from './Header.styles';

export const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar variant="regular" sx={TOOLBAR_STYLES}>
          <Stack sx={STACK_STYLES}>
            <Link
              aria-label="LendingFront"
              href={import.meta.env.VITE_LENDINGFRONT_URL}
              target="_blank"
              sx={LOGO_STYLES}
            >
              <img src="/logo.svg" alt="LendingFront" />
            </Link>
            <IconButton
              aria-label="GitHub"
              component="a"
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              sx={GITHUB_LINK_STYLES}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
