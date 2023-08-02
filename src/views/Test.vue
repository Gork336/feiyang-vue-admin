<template>
  <div>
    <transition @enter="onEnter" @after-enter="onAfterEnter">
      <span>{{ currentValue }}</span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetValue: 100, // 设定的目标值
      currentValue: 0,
    };
  },
  methods: {
    startCountUpAnimation() {
      const stepDuration = 20; // 动画步长，单位毫秒
      const totalSteps = 100; // 总步数
      const stepValue = this.targetValue / totalSteps;

      let currentStep = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        this.currentValue = stepValue * currentStep;

        if (currentStep === totalSteps) {
          clearInterval(intervalId);
        }
      }, stepDuration);
    },
    onEnter(el) {
      el.style.opacity = 0;
    },
    onAfterEnter(el) {
      el.style.opacity = 1;
    },
  },
  mounted() {
    this.startCountUpAnimation();
  },
};
</script>

<!-- <template>
  <div>
    <span :class="{ 'count-up-animation': countUpAnimation }">{{ currentValue }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetValue: 100, // 设定的目标值
      currentValue: 0,
      countUpAnimation: false,
    };
  },
  methods: {
    startCountUpAnimation() {
      const stepDuration = 20; // 动画步长，单位毫秒
      const totalSteps = 100; // 总步数
      const stepValue = this.targetValue / totalSteps;

      let currentStep = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        this.currentValue = stepValue * currentStep;

        if (currentStep === totalSteps) {
          clearInterval(intervalId);
        }
      }, stepDuration);

      // 添加CSS动画
      this.countUpAnimation = true;
      setTimeout(() => {
        this.countUpAnimation = false;
      }, stepDuration * totalSteps);
    },
  },
  mounted() {
    this.startCountUpAnimation();
  },
};
</script>

<style>
.count-up-animation {
  animation: count-up 1s;
}
</style> -->

