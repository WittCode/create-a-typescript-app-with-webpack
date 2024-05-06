/**
 * Create an <img> tag with the src set to the
 * WittCode logo.
 */
export default (): void => {
  const myImg: HTMLImageElement = document.createElement('img');
  myImg.src = 'https://lh3.googleusercontent.com/lYi_qPYP6ayDgmT_Z5Ovzm1XQmtpMXy4hzRtANyBpAZVcUlaGNgCUSUAcOVh4C4T4RlB1Sen-WFb8nw43ytH4p3vPw=s60';
  document.body.appendChild(myImg);
};