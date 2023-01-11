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
      </div>
    </div>

    <div>
      <h2>次要按钮</h2>
      <div>
        <pies-button strong secondary>default</pies-button>
        <pies-button strong secondary type="primary">default</pies-button>
        <pies-button strong secondary type="success">default</pies-button>
        <pies-button strong secondary type="warning">default</pies-button>
        <pies-button strong secondary type="danger">default</pies-button>
        <pies-button strong secondary type="info">default</pies-button>
      </div>
    </div>

    <div>
      <h2>透明背景</h2>
      <div style="background: #eee">
        <pies-button ghost>default</pies-button>
      </div>
    </div>

    <div>
      <h2>其他</h2>
      <div>
        <pies-button circle>+</pies-button>
        <pies-button dashed>虚线按钮</pies-button>
        <pies-button text>文字按钮</pies-button>
        <h3>block按钮，宽度等于其父元素宽度</h3>
        <pies-button block type="danger">block按钮</pies-button>
        <h3>禁用按钮</h3>
        <pies-button disabled>啊西八</pies-button>
        <pies-button disabled type="primary">primary</pies-button>
        <pies-button disabled type="success">success</pies-button>
        <pies-button disabled type="warning">warning</pies-button>
        <pies-button disabled type="danger">danger</pies-button>
        <pies-button disabled type="info">info</pies-button>
        <pies-button disabled dashed>info</pies-button>
        <pies-button disabled circle dashed>info</pies-button>
        <br />
        <br />
        <pies-button secondary disabled>啊西八</pies-button>
        <pies-button secondary disabled type="primary">primary</pies-button>
        <pies-button secondary disabled type="success">success</pies-button>
        <pies-button secondary disabled type="warning">warning</pies-button>
        <pies-button secondary disabled type="danger">danger</pies-button>
        <pies-button secondary disabled type="info">info</pies-button>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
