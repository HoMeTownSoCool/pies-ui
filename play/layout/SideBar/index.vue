<template>
  <div class="side-bar" w="full" bg="#fff" b="rounded-16px" box="border">
    <div v-for="(list, i) in group" :key="`group${i}`" class="group">
      <div v-if="list.title" class="title">
        <span> {{ list.title }}</span>
      </div>
      <div
        v-for="(item, i) in list.items"
        :key="`siderbar${i}`"
        class="item"
        :class="{ active: route.path == item.path }"
        @click="routerPush(item.path)"
      >
        <span v-if="item.name" class="ename"> {{ item.name }} </span>
        <span class="cname"> {{ item.cname }}</span>

        <!-- <lew-tag v-if="item.label" :type="item.type" size="small" style="margin-left: 10px">{{ item.label }} </lew-tag> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from '../../hooks';
  import { useRoute } from 'vue-router';
  import type { PropType } from 'vue';
  const { routerPush } = useRouter();
  const route = useRoute();
  defineProps({
    group: {
      type: Array as PropType<SideBar.Group[]>,
      default() {
        return [];
      }
    }
  });
</script>
<style scoped lang="scss">
  .group {
    white-space: nowrap;
    /* margin-top: 20px; */
    padding: 5px 0px 5px 20px;

    .title {
      margin: 20px 0px 15px 0px;
      padding: 0px 20px;
      font-size: 14px;
      font-weight: 400;
      height: 20px;
      color: #99a9c0;
      overflow: hidden;

      span {
        display: inline-block;
      }
    }

    .item {
      display: flex;
      align-items: center;
      position: relative;
      height: 36px;
      line-height: 36px;
      padding-left: 20px;
      box-sizing: border-box;
      list-style: none;
      width: calc(100% - 20px);
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      color: #515767;
      margin: 4px 0;

      .ename {
        margin-right: 5px;
      }
    }

    .item:hover {
      color: rgb(20, 20, 20);
      background: #f6f7f9;
    }

    .active {
      color: #fff;
      background: mix(#fff, #1643df, 0%);
    }

    .active:hover {
      color: #fff;
      background: mix(#fff, #1643df, 0%);
    }
  }

  .group:last-child {
    padding-bottom: 30px;
  }
</style>
