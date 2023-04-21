import { brandIcons, eye, eyeClosed, genesisIcons } from '@formkit/icons';
import { generateClasses } from '@formkit/themes';
import genesis from '@formkit/themes/tailwindcss/genesis';
import {
  faBuilding,
  faClock,
  faFileLines,
  faLightbulb,
  faMap,
  faPenToSquare,
  faRectangleList,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAddressBook,
  faBookAtlas,
  faBuildingUser,
  faBus,
  faCarSide,
  faChartColumn,
  faClockRotateLeft,
  faGavel,
  faGear,
  faGlobe,
  faGraduationCap,
  faListCheck,
  faLocationCrosshairs,
  faLocationDot,
  faMobileScreenButton,
  faRobot,
  faSchool,
  faSitemap,
  faSliders,
  faSpinner,
  faUserGraduate,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons';
import Colors from 'tailwindcss/colors';
import twemoji from 'twemoji';

export const defaultColors = Colors;

// Make sure it matches tailwind.config.js
export const customColors = {
  pampas: '#f7f4f1',
  'lightning-yellow': '#f9c018',
  'bali-hai': '#799fb3',
  'copper-rust': '#99494E',
  'ebony-clay': '#202737',
  'aqua-forest': '#5aaa6e',
  'brandy-punch': '#d79a36',
  pomegranate: '#f44336',
  azul: '#2e8bb5',
  thunder: '#666666',
  storm: '#999999',
  cloud: '#cccccc',
  happy: '#e66922',
  ibis: '#1f2857',
};

export const chartColors = {
  'lightning-yellow': '#f9c018',
  'bali-hai': '#799fb3',
  'copper-rust': '#99494E',
  'ebony-clay': '#202737',
  'aqua-forest': '#5aaa6e',
  'brandy-punch': '#d79a36',
  pomegranate: '#f44336',
  happy: '#e66922',
  ibis: '#1f2857',
};
/***
 * Window layout and behavior
 ***/
export const SIDEBAR_WIDTH = 'w-60';
export const SIDEBAR_TRIGGER = 1024;
export const CHART_TRIGGER = 728;

/***
 * FontAwesome
 ***/
export const faIcons = [
  faAddressBook,
  faBookAtlas,
  faBuilding,
  faBuildingUser,
  faBus,
  faCarSide,
  faChartColumn,
  faClock,
  faClockRotateLeft,
  faFileLines,
  faGavel,
  faGear,
  faGlobe,
  faGraduationCap,
  faLightbulb,
  faListCheck,
  faLocationCrosshairs,
  faLocationDot,
  faMap,
  faMobileScreenButton,
  faPenToSquare,
  faRectangleList,
  faRobot,
  faSchool,
  faSitemap,
  faSliders,
  faSpinner,
  faStar,
  faUserGraduate,
  faUsersLine,
];

/***
 * Formkit
 ***/

// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
console.log({ ...genesis });

const errorTheme = {
  message: 'text-pomegranate mb-1 text-xs',
};
genesis.global.message = errorTheme.message;
genesis.global.inner =
  'formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none formkit-invalid:ring-pomegranate transition duration-200';
genesis.global.input =
  'appearance-none bg-white focus:outline-none focus:ring-0 focus:shadow-none disabled:bg-gray-200';
genesis.global.fieldset =
  'bg-white border border-cloud rounded px-2 pb-1 formkit-invalid:border-pomegranate hover:border-bali-hai';

genesis['family:text'] = {
  inner:
    'flex items-center ring-1 focus-within:ring-bali-hai focus-within:ring-2 [&>label:first-child]:focus-within:text-bali-hai rounded-md mb-1 ring-cloud hover:ring-bali-hai',
  input:
    'w-full px-3 py-2 border-none rounded-md text-base text-ebony-clay placeholder-gray-400',
};

genesis['family:button'] = {
  input:
    '$reset inline-flex items-center bg-bali-hai/90 hover:bg-bali-hai text-white text-base font-semibold py-3 px-6 rounded-lg focus-visible:outline-2 focus-visible:outline-azul focus-visible:outline-offset-2 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
  wrapper: 'mb-1',
  prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
  suffixIcon: '$reset block w-4 ml-2 stretch',
};

genesis['family:dropdown'] = {
  dropdownWrapper:
    'my-1 w-full drop-shadow-xl rounded-md [&::-webkit-scrollbar]:hidden',
  emptyMessageInner:
    'flex items-center justify-center text-sm p-2 text-center w-full text-gray-500 [&>span]:mr-3 [&>span]:ml-0',
  inner:
    'relative flex ring-1 focus-within:ring-bali-hai focus-within:ring-2 rounded-md mb-1 formkit-disabled:focus-within:ring-gray-400 formkit-disabled:focus-within:ring-1 [&>span:first-child]:focus-within:text-bali-hai ring-cloud hover:ring-bali-hai',
  input: 'w-full px-3 py-2 rounded-md',
  listbox:
    'bg-white border-2 drop-shadow-xl rounded-md overflow-hidden font-medium',
  listboxButton: 'flex w-12 self-stretch justify-center mx-auto',
  listitem:
    'pl-7 relative hover:bg-bali-hai hover:text-white data-[is-active="true"]:bg-bali-hai data-[is-active="true"]:text-white data-[is-active="true"]:aria-selected:bg-bali-hai data-[is-active="true"]:aria-selected:text-white aria-selected:bg-bali-hai aria-selected:text-white',
  loaderIcon: 'ml-auto',
  loadMoreInner:
    'flex items-center justify-center text-sm p-2 text-center w-full text-bali-hai formkit-loading:text-gray-500 cursor-pointer [&>span]:mr-3 [&>span]:ml-0',
  option: 'p-2.5',
  optionLoading: 'text-gray-500',
  placeholder: 'p-2.5 text-gray-400',
  selector: 'flex w-full justify-between items-center [&u]',
  selectedIcon: 'block absolute top-1/2 left-2 w-3 -translate-y-1/2',
  selectIcon: 'flex box-content w-4 px-2 self-stretch grow-0 shrink-0',
};

genesis.file = {
  fileItem: 'flex items-center text-ebony-clay mb-1 last:mb-0',
  fileItemIcon: 'w-4 mr-2 shrink-0',
  fileList:
    'shrink grow peer px-3 py-2 formkit-multiple:data-[has-multiple="true"]:mb-6',
  fileName: 'break-all grow text-ellipsis',
  fileRemove:
    'relative z-[2] ml-auto text-[0px] hover:text-pomegranate pl-2 peer-data-[has-multiple=true]:text-sm peer-data-[has-multiple=true]:text-azul peer-data-[has-multiple=true]:ml-3 peer-data-[has-multiple=true]:mb-2 formkit-multiple:bottom-[0.15em] formkit-multiple:pl-0 formkit-multiple:ml-0 formkit-multiple:left-[1em] formkit-multiple:formkit-prefix-icon:left-[3.75em]',
  fileRemoveIcon: 'block text-base w-3 relative z-[2]',
  inner:
    'relative cursor-pointer formkit-multiple:[&>button]:absolute bg-white',
  input:
    'cursor-pointer text-transparent absolute top-0 right-0 left-0 bottom-0 opacity-0 z-[2]',
  noFiles: 'flex w-full items-center px-3 py-2 text-gray-400',
  noFilesIcon: 'w-4 mr-2',
};

genesis.radio = {
  decorator:
    '$reset formkit-decorator block relative h-5 w-5 ml-2 mr-1 text-transparent peer-checked:text-azul',
  fieldset:
    '$reset formkit-fieldset rounded pb-1 formkit-invalid:border formkit-invalid:border-pomegranate',
  legend: 'pb-1',
  label: '$reset formkit-label py-2 pr-4',
  options: 'grid md:flex md:flex-wrap gap-1 px-1',
  wrapper:
    '$reset formkit-wrapper flex items-center rounded-lg bg-white border border-cloud formkit-checked:border-azul hover:border-azul',
};

genesis.select = {
  inner:
    'flex relative items-center rounded-md mb-1 ring-1 focus-within:ring-bali-hai focus-within:ring-2 [&>span:first-child]:focus-within:text-bali-hai ring-cloud hover:ring-bali-hai',
  input:
    'w-full pl-3 pr-8 py-2 rounded-md border-none text-base text-ebony-clay placeholder-gray-400 formkit-multiple:p-0 data-[placeholder="true"]:text-gray-400 formkit-multiple:data-[placeholder="true"]:text-inherit',
  selectIcon:
    'flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none',
  option: 'formkit-multiple:p-3 formkit-multiple:text-sm text-ebony-clay',
};

genesis.textarea = {
  inner:
    'flex rounded-md mb-1 ring-1 focus-within:ring-bali-hai focus-within:ring-2 [&>label:first-child]:focus-within:text-bali-hai ring-cloud hover:ring-bali-hai',
  input:
    'block resize-none w-full h-48 px-3 py-3 border-none rounded-md text-base text-ebony-clay placeholder-gray-400 focus:shadow-outline',
};

// PRO input styles
genesis.autocomplete = {
  closeIcon: 'block grow-0 shrink-0 w-3 mr-3.5',
  inner: '[&>div>[data-value]]:absolute [&>div>[data-value]]:mb-0',
  option: 'grow text-ellipsis',
  selection:
    'static flex left-0 top-0 right-0 bottom-0 mt-0 mb-2 rounded-md bg-gray-200',
};

genesis.repeater = {
  content: 'grow p-3 flex flex-col align-center',
  controlLabel: 'absolute opacity-0 pointer-events-none',
  controls: 'flex flex-col items-center justify-center bg-gray-100 p-3',
  fieldset: 'py-2 px-3',
  help: 'mb-2 mt-1.5',
  item: 'flex w-full mb-1 rounded border border-gray-200',
  downControl:
    'hover:text-azul disabled:hover:text-inherit disabled:opacity-25',
  moveDownIcon: 'block w-3 my-1',
  upControl: 'hover:text-azul disabled:hover:text-inherit disabled:opacity-25',
  moveUpIcon: 'block w-3 my-1',
  removeControl:
    'hover:text-azul disabled:hover:text-inherit disabled:opacity-25',
  removeIcon: 'block w-5 my-1',
  insertControl:
    'hover:text-azul disabled:hover:text-inherit disabled:opacity-25',
  addIcon: 'block w-5 my-1',
};

genesis.rating = {
  inner: 'relative flex items-center w-[8em] formkit-disabled:bg-transparent',
  itemsWrapper: 'w-full',
  onItems: 'text-lightning-yellow',
  onItemWrapper:
    '[&>*]:w-full [&>svg]:h-auto [&>svg]:max-w-none [&>svg]:max-h-none',
  offItems: 'text-gray-500',
  offItemWrapper:
    '[&>*]:w-full [&>svg]:h-auto [&>svg]:max-w-none [&>svg]:max-h-none',
};

genesis.toggle = {
  altLabel: 'block w-full mb-1 font-medium text-sm',
  inner: '$reset inline-block mr-2',
  input: 'peer absolute opacity-0 pointer-events-none',
  innerLabel:
    'text-[10px] font-bold absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1',
  label: '$reset formkit-label block mb-1 font-medium',
  outer: '$reset formkit-outer mb-2 formkit-disabled:opacity-50',
  thumb:
    'relative left-0 aspect-square rounded-full transition-all w-5 bg-gray-100',
  track:
    'p-0.5 min-w-[3em] relative rounded-full transition-all bg-gray-400 peer-checked:bg-azul peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0',
  valueLabel: 'font-medium text-sm',
  wrapper: 'flex flex-wrap items-center mb-1',
};

/***
 * Custom Validation Rules
 * Be sure to add to formConfig
 ***/
const whitespace = (node) => {
  return node.value.trim().length > 0;
};

const minLength = (node, len) => {
  return node.value.trim().length >= len;
};

const customBoolean = (node, flag) => {
  return flag;
};

const groupCheck = (node) => {
  if (node.value) {
    return node.value.complete || node.value.ignore;
  }
};
groupCheck.skipEmpty = false;

export const formkitConfig = {
  config: {
    classes: generateClasses(genesis),
  },
  icons: {
    // include supporting icons from @formkit/icons
    eye,
    eyeClosed,
    ...brandIcons,
    ...genesisIcons,
  },
  rules: { whitespace, minLength, customBoolean, groupCheck },
};

/***
 * Custom Validation Messages
 ***/

export const whitespaceMessage = {
  whitespace: "Can't have just whitespace!",
};

export const requiredMessage = {
  required: 'Please say something!',
};

/***
 * Emojis
 ***/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomEmoji = async (img) => {
  const emojiList = [
    '😊',
    '🎉',
    '🥳',
    '🏆',
    '🏅',
    '👍',
    '🏝️',
    '💯',
    '💖',
    '✨',
  ];

  const emoji = getRandomInt(0, emojiList.length);

  twemoji.parse(emojiList[emoji], {
    callback: (icon, options) => {
      img.src = ''.concat(options.base, options.size, '/', icon, options.ext);
      img.alt = 'Twemoji';
    },
  });
};
