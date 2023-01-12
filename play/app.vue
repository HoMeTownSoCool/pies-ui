<template>
  <div>
    <h1>按钮</h1>
    <div>
      <h2>按钮大小</h2>
      <div>
        <pies-button type="primary" size="small">small</pies-button>
        <pies-button type="primary">default</pies-button>
        <pies-button type="primary" size="large">large</pies-button>
      </div>
    </div>

    <div>
      <h2>按钮类型</h2>
      <div>
        <pies-button>default</pies-button>
        <pies-button type="primary">primary</pies-button>
        <pies-button type="success">success</pies-button>
        <pies-button type="warning">warning</pies-button>
        <pies-button type="danger">danger</pies-button>
        <pies-button type="info">info</pies-button>
        <pies-button dashed>虚线按钮</pies-button>
        <pies-button circle>+</pies-button>
        <pies-button type="text" href="https://juejin.cn/user/4116184668057390">Link HoMeTown</pies-button>
      </div>
      <br />
      <div>
        <pies-button disabled>default</pies-button>
        <pies-button disabled type="primary">primary</pies-button>
        <pies-button disabled type="success">success</pies-button>
        <pies-button disabled type="warning">warning</pies-button>
        <pies-button disabled type="danger">danger</pies-button>
        <pies-button disabled type="info">info</pies-button>
        <pies-button disabled dashed>虚线按钮</pies-button>
        <pies-button disabled circle>+</pies-button>
        <pies-button disabled type="text" href="https://juejin.cn/user/4116184668057390">Link HoMeTown</pies-button>
      </div>
    </div>

    <div>
      <h2>次要按钮</h2>
      <div>
        <pies-button strong secondary>default</pies-button>
        <pies-button strong secondary type="primary">primary</pies-button>
        <pies-button strong secondary type="success">success</pies-button>
        <pies-button strong secondary type="warning">warning</pies-button>
        <pies-button strong secondary type="danger">danger</pies-button>
        <pies-button strong secondary type="info">info</pies-button>
      </div>
      <br />
      <div>
        <pies-button secondary disabled>default</pies-button>
        <pies-button secondary disabled type="primary">primary</pies-button>
        <pies-button secondary disabled type="success">success</pies-button>
        <pies-button secondary disabled type="warning">warning</pies-button>
        <pies-button secondary disabled type="danger">danger</pies-button>
        <pies-button secondary disabled type="info">info</pies-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
