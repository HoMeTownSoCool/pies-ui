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
        <pies-button secondary>default</pies-button>
        <pies-button secondary type="primary">default</pies-button>
        <pies-button secondary type="success">default</pies-button>
        <pies-button secondary type="warning">default</pies-button>
        <pies-button secondary type="danger">default</pies-button>
        <pies-button secondary type="info">default</pies-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
