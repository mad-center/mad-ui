import { App } from 'vue'

import MadAfterImage from './after-image'
import MadAlert from './alert'
import MadBlock from './block'
import MadBreadcrumb from './breadcrumb'
import MadButton from './button'
import MadBox from './box'
import MadCircleRipple from './circle-ripple'
import MadCircularRipple from './circular-ripple'
import MadCircularText from './circular-text'
import MadCircularTextGroup from './circular-text-group'
import MadClipPath from './clip-path'
import MadCodeBlock from './code-block'
import MadCollapseTransition from './collapse-transition'
import MadColumn from './column'
import MadContainer from './container'
import MadCover from './cover'
import MadDelete from './delete'
import MadDivider from './divider'
import MadDropdown from './dropdown'
import MadExpansion from './expansion'
import MadGear from './gear'
import MadGrid from './grid'
import MadHeader from './header'
import MadIcon from './icon'
import MadImage from './image'
import MadImageCross from './image-cross'
import MadImageOverlap from './image-overlap'
import MadImageParallax from './image-parallax'
import MadImageReveal from './image-reveal'
import MadInput from './input'
import MadInputAddOn from './input-add-on'
import MadInsetBorder from './inset-border'
import MadLetterBox from './letter-box'
import MadLetterPaper from './letter-paper'
import MadMedia from './media'
import MadMenu from './menu'
import MadModal from './modal'
import MadNotification from './notification'
import MadOrbitSpinner from './orbit-spinner'
import MadPagination from './pagination'
import MadProgress from './progress'
import MadRow from './row'
import MadSelect from './select'
import MadShield from './shield'
import MadShutter from './shutter'
import MadTable from './table'
import MadTag from './tag'
import MadText from './text'
import MadTextArea from './text-area'
import MadTimeline from './timeline'
import MadTreeItem from './tree-item'
// import MadUtils from './utils'
import MadWave from './wave'

const components = [
  MadAfterImage,
  MadAlert,
  MadBlock,
  MadBreadcrumb,
  MadButton,
  MadBox,
  MadCircleRipple,
  MadCircularRipple,
  MadCircularText,
  MadCircularTextGroup,
  MadClipPath,
  MadCodeBlock,
  MadCollapseTransition,
  MadColumn,
  MadContainer,
  MadCover,
  MadDelete,
  MadDivider,
  MadDropdown,
  MadExpansion,
  MadGear,
  MadGrid,
  MadHeader,
  MadIcon,
  MadImage,
  MadImageCross,
  MadImageOverlap,
  MadImageParallax,
  MadImageReveal,
  MadInput,
  MadInputAddOn,
  MadInsetBorder,
  MadLetterBox,
  MadLetterPaper,
  MadMedia,
  MadMenu,
  MadModal,
  MadNotification,
  MadOrbitSpinner,
  MadPagination,
  MadProgress,
  MadRow,
  MadSelect,
  MadShield,
  MadShutter,
  MadTable,
  MadTag,
  MadText,
  MadTextArea,
  MadTimeline,
  MadTreeItem,
  MadWave,
]

const plugins: any[] = [
  //
]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export {
  MadAfterImage,
  MadAlert,
  MadBlock,
  MadBreadcrumb,
  MadButton,
  MadBox,
  MadCircleRipple,
  MadCircularRipple,
  MadCircularText,
  MadCircularTextGroup,
  MadClipPath,
  MadCodeBlock,
  MadCollapseTransition,
  MadColumn,
  MadContainer,
  MadCover,
  MadDelete,
  MadDivider,
  MadDropdown,
  MadExpansion,
  MadGear,
  MadGrid,
  MadHeader,
  MadIcon,
  MadImage,
  MadImageCross,
  MadImageOverlap,
  MadImageParallax,
  MadImageReveal,
  MadInput,
  MadInputAddOn,
  MadInsetBorder,
  MadLetterBox,
  MadLetterPaper,
  MadMedia,
  MadMenu,
  MadModal,
  MadNotification,
  MadOrbitSpinner,
  MadPagination,
  MadProgress,
  MadRow,
  MadSelect,
  MadShield,
  MadShutter,
  MadTable,
  MadTag,
  MadText,
  MadTextArea,
  MadTimeline,
  MadTreeItem,
  MadWave,
  install,
}

export default {
  install,
}
