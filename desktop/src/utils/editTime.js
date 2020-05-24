export default time => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  return time ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` : '0:00';
};
