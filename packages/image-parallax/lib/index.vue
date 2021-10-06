<template>
  <div
    ref="front"
    class="front"
    :style="{
      width: width,
      height: height,
    }"
    @mousemove="handleMouseMove($event)"
  >
    <div
      ref="back"
      class="back"
      :style="{
        backgroundImage: `url(${src})`,
      }"
    />
    }
  </div>
</template>

<script>
/**
 *
 1. 监听 front 元素的鼠标移动事件
 2. 计算X轴上容器中心相对鼠标X轴坐标的偏移量
 3. 计算Y轴上容器中心相对鼠标Y轴坐标的偏移量
 4. 将以上偏移量乘以一定的比例
 5. 使用偏移量移动 back 元素。
 - moveX 为 +, 图片在X轴右移。
 - moveY 为 +，图片在Y轴下移。
 */
export default {
  name: 'MadImageParallax',
  props: {
    width: {
      type: String,
      default: '640px',
      required: false,
    },
    height: {
      type: String,
      default: '320px',
      required: false,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    handleMouseMove(e) {
      let clientWidth = this.$refs.front.clientWidth
      let clientHeight = this.$refs.front.clientHeight

      let moveX = (clientWidth / 2 - e.clientX) * 0.1
      let moveY = (clientHeight / 2 - e.clientY) * 0.1

      this.$refs.back.style.marginLeft = moveX + 'px'
      this.$refs.back.style.marginTop = moveY + 'px'
    },
  },
}
</script>

<style scoped lang="scss">
/* 100% * 100% */
.front {
  position: relative;
  overflow: hidden;
  background-color: #fff;
}

/* 120% * 120%，使用 left和top偏移-10%使得中心和.front对齐 */
.back {
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;
  position: absolute;
  //background-image: here
  background-size: cover;
  background-position: center;
  transition: 0.2s linear;

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(27, 34, 53, 0.6);
    clip-path: polygon(0 0, 24% 0, 64% 100%, 0% 100%);
  }
}
</style>
