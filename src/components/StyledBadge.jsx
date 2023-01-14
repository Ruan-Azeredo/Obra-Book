import { styled } from '@nextui-org/react';

// Badge component will be available as part of the core library soon
export const StyledBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$3 $8',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  color: '$white',
  variants: {
    type: {
      Ativo: {
        bg: "var(--greenTransparent)",
        color: "var(--green)",
        borderWidth: "2px",
        borderColor: "var(--green)"
      },
      Desativo: {
        bg: "var(--redTransparent)",
        color: "var(--red)",
        borderWidth: "2px",
        borderColor: "var(--red)"
      }
    }
  },
  defaultVariants: {
    type: 'active'
  }
});
