import Clean from 'clean-css';
import items from 'pokemon-assets/assets/css/items.css?inline';
// import inventory from 'pokesprite-spritesheet/assets/pokesprite-inventory.css'; //TODO migrate to new assets: github:msikma/pokesprite-spritesheet

const clean = new Clean();
const minifiedItems = clean.minify(items).styles;

export default minifiedItems;
