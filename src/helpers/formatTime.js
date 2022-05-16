export const formatDate = (start) => {
  const d = new Date();
  if (start) {
    d.setMonth(d.getMonth() + 1);
  }
  const a = d.getDate();
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  return `${y}-${m > 9 ? m : "0" + m}-${a > 9 ? a : "0" + a}`;
};
