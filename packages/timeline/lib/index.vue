<template>
  <div class="timeline">
    <slot />
    <div class="clearfix" />
  </div>
</template>

<script>
/**
 * one-side mode, text all on right
 */
export default {
  name: 'MadTimeline',
}
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  width: 60rem;
  margin: 3rem auto;

  &::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 104%;
    // make center-x
    left: 50%;
    transform: translateX(-50%) translateY(-2%);
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::v-deep ul li {
    position: relative;
    width: 50%;
    list-style: none;
    padding: 1rem 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    .content h3 {
      color: rgba(233, 33, 99, 0.8);
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .time h4 {
      margin-top: 0;
      margin-bottom: 0;
    }

    &:nth-child(odd) {
      float: left;
      text-align: right;
      clear: both;

      &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        right: 0;
        transform: translateX(50%);

        background: rgba(233, 33, 99, 1);
        border-radius: 50%;
        box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
      }

      .time {
        position: absolute;
        top: 0.75rem;
        right: 0;
        transform: translateX(calc(100% + 20px));
        border: 2px solid rgba(233, 33, 99, 0.4);
        padding: 5px 10px;
      }
    }

    &:nth-child(even) {
      float: right;
      text-align: left;
      clear: both;

      &::before {
        content: '';
        position: absolute;
        height: 20px;
        width: 20px;
        left: 0;
        transform: translateX(-50%);

        background: rgba(233, 33, 99, 1);
        border-radius: 50%;
        box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
      }

      .time {
        position: absolute;
        top: 0.75rem;
        left: 0;
        transform: translateX(calc(-100% - 20px));
        border: 2px solid rgba(233, 33, 99, 0.4);
        padding: 5px 10px;
      }
    }
  }
}

.clearfix {
  clear: both;
}
</style>
