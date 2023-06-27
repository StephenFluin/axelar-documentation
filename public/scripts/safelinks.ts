export const safeLinks = () => {
  console.log("turning links safe");

  [...document.links].map((link) => {
    if(link.hostname === window.location.hostname) return;
    link.relList.add("noopener");
    link.relList.add("noreferrer");
  });
};
