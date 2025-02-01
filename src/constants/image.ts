import { getImage } from 'astro:assets';

export const origin = 'https://img.souhait.me';

export const icon = `${origin}/icon.png`;
export const banner = `${origin}/banner2.png`;
export const avatar = `${origin}/avatar.png`;
export const souhaitChan = `${origin}/souhait.png`;
export const souhaitChanOld1 = `${origin}/souhait_old1.png`;
export const souhaitChanOld2 = `${origin}/souhait_old2.png`;
export const souhaitChanOld3 = `${origin}/souhait_old3.png`;
export const art = {
  sakananoonigiri1: `${origin}/art/sakananoonigiri1.png`,
} as const;

export const optimizedSouhaitChan = await getImage({
  src: souhaitChan,
  width: 1024,
  height: 1024,
});
export const optimizedSouhaitChanOld1 = await getImage({
  src: souhaitChanOld1,
  width: 1024,
  height: 1024,
});
export const optimizedSouhaitChanOld2 = await getImage({
  src: souhaitChanOld2,
  width: 1024,
  height: 1024,
});
export const optimizedSouhaitChanOld3 = await getImage({
  src: souhaitChanOld3,
  width: 1024,
  height: 1024,
});
