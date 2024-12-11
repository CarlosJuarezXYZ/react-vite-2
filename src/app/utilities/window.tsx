export const redirectTo = (url: string | URL): void => {
  try {
    window.location.href = (url instanceof URL ? url : new URL(url)).href;
  } catch {
    console.error(`invalid URL: ${url}`);
  }
};

export const windowOpen = (url: string) => {
  window.open(url, "_blank", "noreferrer noopener");
};
