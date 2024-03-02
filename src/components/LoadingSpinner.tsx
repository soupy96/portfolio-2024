import styled from 'styled-components';

const LoadingSpinner = () => {
  return <LoadSpin className='spinner'></LoadSpin>;
};

const LoadSpin = styled.div`
  .spinner {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .spinner:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #f0ff00;
    border-color: #f0ff00 transparent #f0ff00 transparent;
    animation: spinner 1.2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;