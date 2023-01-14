import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TooltipMaterial from '@mui/material/Tooltip';
import { tooltipClasses } from '@mui/material/Tooltip';

const TooltipBlack = styled(({ className, ...props }) => (
  <TooltipMaterial {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const Tooltip = ({ text, children }) => {
  return (
    <TooltipBlack title={text} arrow>
      {children}
    </TooltipBlack>
  );
};
