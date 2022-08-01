<template>

  <!-- <StatisticTest /> -->

  <div style="height: 100vh; position: relative">

    <!-- <n-layout-header style="height: 64px; padding: 24px" bordered class="topbar">
        颐和园路
      </n-layout-header> -->
    <n-layout has-sider style="top: 64px; bottom: 64px">

      <n-layout-sider bordered content-style="padding: 24px;" class="sidebar">
        <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
      </n-layout-sider>

      <n-layout content-style="padding: 24px;" :native-scrollbar="false" bordered>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
      </n-layout>
    </n-layout>
    <!-- <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
        城府路
      </n-layout-footer> -->

  </div>


</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<script>
import { defineComponent, h } from "vue";
import { useMessage } from "naive-ui";
import { RouterLink } from "vue-router";



const menuOptions = [
  {
    label: () => h(RouterLink, {
      to: {
        name: "home",
        params: {
          lang: "zh-CN"
        }
      }
    }, { default: () => "回家" }),
    key: "go-back-home",
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px"
      }
    }
  },
  {
    label: () => h("a", {
      href: "https://www.google.com/",
      target: "_blank",
      rel: "noopenner noreferrer"
    }, "且听风吟"),
    key: "hear-the-wind-sing",
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    disabled: true,
    children: [
      {
        label: "鼠",
        key: "rat"
      }
    ]
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
    disabled: true
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
          },
          {
            label: "羊男",
            key: "sheep-man",
          }
        ]
      },
      {
        label: "饮品",
        key: "beverage",
        children: [
          {
            label: "威士忌",
            key: "whisky"
          }
        ]
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich"
          }
        ]
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes"
      }
    ]
  }
];

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      menuOptions,
      handleUpdateValue(key, item) {
        message.info("[onUpdate:value]: " + JSON.stringify(key));
        message.info("[onUpdate:value]: " + JSON.stringify(item));
      }
    };
  }
});</script>


<style scoped>
.topbar {
  height: 200px;
  background: #F0F0EA;
}

.sidebar {
  /* background: #36383C; */
  height: 100vh;
  background: #F0F0EA;

  /* color: white; */
}
</style>

