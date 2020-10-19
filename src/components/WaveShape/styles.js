import styled from '@emotion/styled'
import { colors } from '../../styles/GlobalStyles'

export const WaveShapeContainer = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    & svg {
      position: relative;
      display: block;
      width: calc(167% + 1.3px);
      height: 104px;
      transform: rotateY(180deg);
    }

    & .shape-fill {
      fill: ${colors.red};
    }
`