
export default ({
  size = 18,
  value,
  title = null,
  onCopy,
  className = "",
}) => {

console.log('rendering!');
  console.log('title is',title);
  return (
    <div class="copy-capable">
      {title ? ('title is:' + title) : 'copy'}</div>
  );
};