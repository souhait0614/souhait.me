import {getImage} from 'astro:assets';

export const origin = 'https://img.souhait.me';

export const icon = `${origin}/icon.png`;
export const banner = `${origin}/banner2.png`;
export const avatar = `${origin}/avatar.png`;
export const souhaitChan = `${origin}/souhait.png`;
export const souhaitChanOlds = [
  `${origin}/souhait_old1.png`,
  `${origin}/souhait_old2.png`,
  `${origin}/souhait_old3.png`,
];
export const art = {
  sakananoonigiri1: `${origin}/art/sakananoonigiri1.png`,
} as const;

export const optimizedSouhaitChan = await getImage({
  src: souhaitChan,
  width: 1024,
  height: 1024,
});
